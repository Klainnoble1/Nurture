'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ROOMS = [
  { id: 'baby-room', label: 'Baby Room' },
  { id: 'toddler-room', label: 'Toddler Room' },
  { id: 'preschool-room', label: 'Preschool Room' },
  { id: 'garden', label: 'Garden Area' },
];

type Enquiry = { id: string; name: string; email: string; contact_number: string; enquiry_text: string; created_at: string; status: string };
type Tour = { id: string; name: string; email: string; contact_number: string; preferred_type: string; marketing_opt_in: boolean; created_at: string; status: string };
type AdditionalChild = { child_name?: string; child_dob?: string; child_age?: string; start_date?: string };
type Application = {
  id: string;
  parent_name: string;
  parent_dob?: string | null;
  email: string;
  mobile: string;
  child_name: string;
  child_dob: string;
  child_age: string;
  start_date: string;
  has_multiple_children?: boolean;
  additional_children?: AdditionalChild[] | null;
  created_at: string;
  status: string;
};
type GalleryImage = { filename: string; room: string; url: string };

function Badge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    new: 'bg-blue-100 text-blue-700',
    read: 'bg-slate-100 text-slate-600',
    replied: 'bg-green-100 text-green-700',
    pending: 'bg-amber-100 text-amber-700',
    contacted: 'bg-purple-100 text-purple-700',
    completed: 'bg-green-100 text-green-700',
    reviewed: 'bg-blue-100 text-blue-700',
    accepted: 'bg-green-100 text-green-700',
    waitlisted: 'bg-orange-100 text-orange-700',
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${colors[status] ?? 'bg-slate-100 text-slate-600'}`}>
      {status}
    </span>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function hasPhoneNumber(phone?: string | null) {
  if (!phone) return false;
  const normalized = phone.trim().toLowerCase();
  return normalized.length > 0 && normalized !== 'not provided';
}

function getAdditionalChildren(application: Application) {
  if (!Array.isArray(application.additional_children)) return [];

  return application.additional_children.filter(
    child => Boolean(child?.child_name || child?.child_dob || child?.child_age || child?.start_date)
  );
}

export default function AdminDashboardClient() {
  const [activeTab, setActiveTab] = useState<'enquiries' | 'tours' | 'applications' | 'gallery'>('enquiries');
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [tours, setTours] = useState<Tour[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [galleryImages, setGalleryImages] = useState<Record<string, GalleryImage[]>>({});
  const [activeGalleryRoom, setActiveGalleryRoom] = useState('baby-room');
  const [loadingData, setLoadingData] = useState(true);
  const [uploadingTo, setUploadingTo] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const fetchSubmissions = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/submissions');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setEnquiries(data.enquiries ?? []);
      setTours(data.tours ?? []);
      setApplications(data.applications ?? []);
    } catch {
      // silently fail — Supabase might not have data yet
    }
  }, []);

  const fetchGallery = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/gallery');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setGalleryImages(data.images ?? {});
    } catch {
      // silently fail
    }
  }, []);

  useEffect(() => {
    Promise.all([fetchSubmissions(), fetchGallery()]).finally(() => setLoadingData(false));
  }, [fetchSubmissions, fetchGallery]);

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  }

  async function handleDelete(filename: string, room: string) {
    if (!confirm(`Delete "${filename}" from ${room}?`)) return;
    await fetch('/api/admin/gallery/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, room }),
    });
    fetchGallery();
  }

  async function handleMove(filename: string, fromRoom: string, toRoom: string) {
    await fetch('/api/admin/gallery/move', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, fromRoom, toRoom }),
    });
    fetchGallery();
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingTo(activeGalleryRoom);
    const fd = new FormData();
    fd.append('file', file);
    fd.append('room', activeGalleryRoom);
    await fetch('/api/admin/gallery', { method: 'POST', body: fd });
    setUploadingTo(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    fetchGallery();
  }

  const tabs = [
    { id: 'enquiries', label: 'Enquiries', count: enquiries.length, icon: '📋' },
    { id: 'tours', label: 'Tour Requests', count: tours.length, icon: '🗓️' },
    { id: 'applications', label: 'Applications', count: applications.length, icon: '📝' },
    { id: 'gallery', label: 'Gallery', count: Object.values(galleryImages).flat().length, icon: '🖼️' },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-nest-50 border border-nest-100 overflow-hidden flex items-center justify-center">
              <Image src="/logo-removebg-preview.png" alt="Logo" width={32} height={32} className="object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-display font-bold text-slate-900 leading-none">The Nurture Nest</h1>
              <p className="text-xs text-slate-400">Admin Dashboard</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`bg-white rounded-2xl p-5 border text-left transition hover:shadow-md ${activeTab === tab.id ? 'border-nest-400 shadow-md' : 'border-slate-200'}`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <p className="text-3xl font-display font-bold text-slate-900 mt-2">{tab.count}</p>
              <p className="text-sm text-slate-500 font-medium">{tab.label}</p>
            </button>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="flex border-b border-slate-200 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition ${
                  activeTab === tab.id
                    ? 'text-nest-700 border-b-2 border-nest-500 bg-nest-50'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.icon} {tab.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id ? 'bg-nest-100 text-nest-700' : 'bg-slate-100 text-slate-500'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="p-6">
            {loadingData && (
              <div className="text-center py-16 text-slate-400">
                <div className="w-8 h-8 border-4 border-nest-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                Loading…
              </div>
            )}

            {/* ENQUIRIES */}
            {!loadingData && activeTab === 'enquiries' && (
              <div>
                <h2 className="text-xl font-display font-bold text-slate-900 mb-4">General Enquiries</h2>
                {enquiries.length === 0 ? (
                  <p className="text-slate-400 text-center py-12">No enquiries yet.</p>
                ) : (
                  <div className="space-y-3">
                    {enquiries.map(e => (
                      <div key={e.id} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          className="w-full text-left p-4 hover:bg-slate-50 transition flex items-center justify-between gap-4"
                          onClick={() => setExpandedRow(expandedRow === e.id ? null : e.id)}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-nest-100 flex items-center justify-center text-nest-700 font-bold text-sm flex-shrink-0">
                              {e.name?.[0]?.toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-900 truncate">{e.name}</p>
                              <p className="text-xs text-slate-500">
                                {e.email}
                                {hasPhoneNumber(e.contact_number) ? ` | ${e.contact_number}` : ''}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <Badge status={e.status} />
                            <span className="text-xs text-slate-400 hidden sm:block">{formatDate(e.created_at)}</span>
                            <span className="text-slate-400">{expandedRow === e.id ? '▲' : '▼'}</span>
                          </div>
                        </button>
                        {expandedRow === e.id && (
                          <div className="px-4 pb-4 border-t border-slate-100 bg-slate-50">
                            <p className="text-sm text-slate-600 mt-3 leading-relaxed">{e.enquiry_text}</p>
                            <div className="mt-3 flex gap-2">
                              <a href={`mailto:${e.email}`} className="text-xs px-3 py-1.5 bg-nest-600 text-white rounded-lg hover:bg-nest-700 transition font-medium">
                                Reply by email
                              </a>
                              {hasPhoneNumber(e.contact_number) && (
                                <a href={`tel:${e.contact_number}`} className="text-xs px-3 py-1.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition font-medium">
                                  Call
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TOURS */}
            {!loadingData && activeTab === 'tours' && (
              <div>
                <h2 className="text-xl font-display font-bold text-slate-900 mb-4">Tour Requests</h2>
                {tours.length === 0 ? (
                  <p className="text-slate-400 text-center py-12">No tour requests yet.</p>
                ) : (
                  <div className="space-y-3">
                    {tours.map(t => (
                      <div key={t.id} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          className="w-full text-left p-4 hover:bg-slate-50 transition flex items-center justify-between gap-4"
                          onClick={() => setExpandedRow(expandedRow === t.id ? null : t.id)}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-curiosity-100 flex items-center justify-center text-curiosity-700 font-bold text-sm flex-shrink-0">
                              {t.name?.[0]?.toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-900 truncate">{t.name}</p>
                              <p className="text-xs text-slate-500">{t.preferred_type}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <Badge status={t.status} />
                            <span className="text-xs text-slate-400 hidden sm:block">{formatDate(t.created_at)}</span>
                            <span className="text-slate-400">{expandedRow === t.id ? '▲' : '▼'}</span>
                          </div>
                        </button>
                        {expandedRow === t.id && (
                          <div className="px-4 pb-4 border-t border-slate-100 bg-slate-50">
                            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                              <p><span className="font-semibold">Email:</span> {t.email}</p>
                              <p><span className="font-semibold">Phone:</span> {t.contact_number}</p>
                              <p><span className="font-semibold">Tour type:</span> {t.preferred_type}</p>
                              <p><span className="font-semibold">Marketing:</span> {t.marketing_opt_in ? 'Yes' : 'No'}</p>
                            </div>
                            <div className="mt-3 flex gap-2">
                              <a href={`mailto:${t.email}`} className="text-xs px-3 py-1.5 bg-nest-600 text-white rounded-lg hover:bg-nest-700 transition font-medium">
                                Reply by email
                              </a>
                              <a href={`tel:${t.contact_number}`} className="text-xs px-3 py-1.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition font-medium">
                                Call
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* APPLICATIONS */}
            {!loadingData && activeTab === 'applications' && (
              <div>
                <h2 className="text-xl font-display font-bold text-slate-900 mb-4">Nursery Applications</h2>
                {applications.length === 0 ? (
                  <p className="text-slate-400 text-center py-12">No applications yet.</p>
                ) : (
                  <div className="space-y-3">
                    {applications.map(a => (
                      <div key={a.id} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          className="w-full text-left p-4 hover:bg-slate-50 transition flex items-center justify-between gap-4"
                          onClick={() => setExpandedRow(expandedRow === a.id ? null : a.id)}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-full bg-joy-100 flex items-center justify-center text-joy-700 font-bold text-sm flex-shrink-0">
                              {a.parent_name?.[0]?.toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-900 truncate">Child: {a.child_name}</p>
                              <p className="text-xs text-slate-500">Parent: {a.parent_name} | Start: {a.start_date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <Badge status={a.status} />
                            <span className="text-xs text-slate-400 hidden sm:block">{formatDate(a.created_at)}</span>
                            <span className="text-slate-400">{expandedRow === a.id ? '▲' : '▼'}</span>
                          </div>
                        </button>
                        {expandedRow === a.id && (
                          <div className="px-4 pb-4 border-t border-slate-100 bg-slate-50">
                            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                              <p><span className="font-semibold">Parent:</span> {a.parent_name}</p>
                              <p><span className="font-semibold">Parent DOB:</span> {a.parent_dob || 'Not provided'}</p>
                              <p><span className="font-semibold">Email:</span> {a.email}</p>
                              <p><span className="font-semibold">Mobile:</span> {a.mobile}</p>
                              <p><span className="font-semibold">Child name:</span> {a.child_name}</p>
                              <p><span className="font-semibold">Child DOB:</span> {a.child_dob}</p>
                              <p><span className="font-semibold">Child age:</span> {a.child_age}</p>
                              <p><span className="font-semibold">Start date:</span> {a.start_date}</p>
                            </div>
                            {getAdditionalChildren(a).length > 0 && (
                              <div className="mt-4 border-t border-slate-200 pt-4">
                                <p className="text-sm font-semibold text-slate-800 mb-3">Additional Children</p>
                                <div className="space-y-3">
                                  {getAdditionalChildren(a).map((child, index) => (
                                    <div key={`${a.id}-child-${index}`} className="rounded-xl border border-slate-200 bg-white p-3">
                                      <p className="text-sm font-semibold text-slate-800 mb-2">Child {index + 2}</p>
                                      <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                                        <p><span className="font-semibold">Name:</span> {child.child_name || 'Not provided'}</p>
                                        <p><span className="font-semibold">DOB:</span> {child.child_dob || 'Not provided'}</p>
                                        <p><span className="font-semibold">Age:</span> {child.child_age || 'Not provided'}</p>
                                        <p><span className="font-semibold">Start date:</span> {child.start_date || 'Not provided'}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            <div className="mt-3 flex gap-2">
                              <a href={`mailto:${a.email}`} className="text-xs px-3 py-1.5 bg-nest-600 text-white rounded-lg hover:bg-nest-700 transition font-medium">
                                Reply by email
                              </a>
                              <a href={`tel:${a.mobile}`} className="text-xs px-3 py-1.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition font-medium">
                                Call
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* GALLERY */}
            {!loadingData && activeTab === 'gallery' && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl font-display font-bold text-slate-900">Gallery Management</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-500">Uploading to:</span>
                    <select
                      value={activeGalleryRoom}
                      onChange={e => setActiveGalleryRoom(e.target.value)}
                      className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-nest-400"
                    >
                      {ROOMS.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                    </select>
                    <label className={`px-4 py-2 bg-nest-600 text-white text-sm font-semibold rounded-lg cursor-pointer hover:bg-nest-700 transition ${uploadingTo ? 'opacity-60 cursor-wait' : ''}`}>
                      {uploadingTo ? 'Uploading…' : '+ Upload Photo'}
                      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={!!uploadingTo} />
                    </label>
                  </div>
                </div>

                {/* Room tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
                  {ROOMS.map(r => (
                    <button
                      key={r.id}
                      onClick={() => setActiveGalleryRoom(r.id)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                        activeGalleryRoom === r.id
                          ? 'bg-nest-600 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {r.label}
                      <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${activeGalleryRoom === r.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {galleryImages[r.id]?.length ?? 0}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Images grid */}
                {(galleryImages[activeGalleryRoom]?.length ?? 0) === 0 ? (
                  <div className="text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400">
                    <p className="text-4xl mb-3">📷</p>
                    <p>No photos in this room yet. Upload one above!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {(galleryImages[activeGalleryRoom] ?? []).map(img => (
                      <div key={img.url} className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-square">
                        <Image src={img.url} alt={img.filename} fill sizes="20vw" className="object-cover" />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
                          <button
                            onClick={() => handleDelete(img.filename, img.room)}
                            className="w-full py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-lg transition"
                          >
                            Delete
                          </button>
                          <div className="w-full">
                            <p className="text-white text-xs text-center mb-1 font-medium">Move to:</p>
                            <div className="flex flex-wrap gap-1 justify-center">
                              {ROOMS.filter(r => r.id !== activeGalleryRoom).map(r => (
                                <button
                                  key={r.id}
                                  onClick={() => handleMove(img.filename, img.room, r.id)}
                                  className="px-2 py-1 bg-white/20 hover:bg-white/40 text-white text-xs rounded font-medium transition"
                                >
                                  {r.label.split(' ')[0]}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-slate-900/60 text-white text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">
                          {img.filename}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
