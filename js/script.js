// --- LANGUAGE TRANSLATION DATA ---
const translations = {
    // English (en) - Your current default
    en: {
        // HEADER & NAVIGATION
        'title': 'HazeRadar: 3-Day Smoke Prediction',
        'nav_haze_prediction': 'Haze Prediction',
        'nav_key_matrix': 'Key Matrix',
        'nav_cloud_vision': 'CrowdVision',

        // CONTROL PANEL (Map Sidebar)
        'timeline_header': 'Prediction Timeline',
        'time_now': 'Now',
        'time_4hr': '4hr',
        'time_8hr': '8hr',
        'time_12hr': '12hr',
        'time_16hr': '16hr',
        'time_20hr': '20hr',
        'time_24hr': '24hr',

        'area_list_header': 'Affected Areas (Click to View)',
        'area_list_empty': 'No locations have been liked yet.',

        // METRICS PANEL
        'metrics_header': 'Haze Metrics',
        'metric_current_status': 'Current Status',
        'metric_predicted_aqi': 'Predicted AQI',
        'metric_wind_speed': 'PM2.5',
        'metric_visibility': 'Temperature',

        // CLOUDVISION PANEL
        'cv_header': 'CrowdVision Insight',
        'cv_explanation': 'Use CrowdVision to see if you are in a safe environment.',
        'cv_browse_link': 'Click to browse',
        'cv_drag_drop': 'or drag and drop',
        'cv_file_type': 'PNG, JPG, or JPEG (Max 5MB per file)',
        'cv_button_analyze': 'Analyze Photo with CrowdVision',
        'cv_button_analyze_count': 'Analyze {count} Photo',
        'api_title_analyzing': 'Analyzing...',

        // NEW HAZE INSIGHT KEYS
        'haze_insight_header': 'Haze Insight',
        'haze_insight_text': 'Simulate your own smoke prediction.',
        'haze_insight_button': 'Start Simulation Tool',

        // FOOTER & OTHER
        'footer_mission_header': 'Our Team & Mission',
        'footer_mission_text': 'HazeRadar is built by a dedicated team focused on environmental technology and data science. We strive to provide accurate, predictive modeling for smoke and haze events across Southeast Asia. Our platform leverages advanced satellite data and machine learning (CrowdVision) to empower local communities with critical air quality information, promoting public health and informed decision-decision-making.',
        'footer_back_to_map': 'Back to Map',
        'modal_close': 'Close',

        // MOCK API RESPONSES (Must use innerHTML for bold)
        'api_unhealthy_severe': 'AQI determined as **Unhealthy**. Outdoor activity is strongly discouraged. Minimize exposure and consider wearing a high-efficiency mask (N95 or higher).',
        'api_unhealthy_sensitive': 'AQI determined as **Unhealthy for Sensitive Groups**. Limit prolonged outdoor exertion. Individuals with respiratory conditions should remain indoors.',
        'api_moderate': 'AQI determined as **Moderate**. Air quality is acceptable; however, unusually sensitive people should consider limiting prolonged outdoor exertion.',
        'api_limit_reached': 'Maximum of {count} files reached. Cannot add more.',
        'api_file_type_error': 'File {name} is not a supported image type (PNG/JPG/JPEG).',
        'api_file_size_limit': 'File {name} exceeds the {size}MB limit.',
        'api_analysis_required': 'Please select files before attempting AI analysis.',
        'api_title_complete': 'CrowdVision Analysis Complete (AQI: {aqi})',
        'api_title_message': 'Message',
    },
    // Bahasa Indonesia (id)
    id: {
        'title': 'HazeRadar: Prediksi Asap 3 Hari',
        'nav_haze_prediction': 'Prediksi Asap',
        'nav_key_matrix': 'Matriks Kunci',
        'nav_cloud_vision': 'CrowdVision',

        'timeline_header': 'Garis Waktu Prediksi',
        'time_now': 'Sekarang',
        'time_4hr': '4 jam',
        'time_8hr': '8 jam',
        'time_12hr': '12 jam',
        'time_16hr': '16 jam',
        'time_20hr': '20 jam',
        'time_24hr': '24 jam',

        'area_list_header': 'Area Terdampak (Klik untuk Melihat)',
        'area_list_empty': 'Belum ada lokasi yang disukai.',

        'metrics_header': 'Metrik Kabut Asap',
        'metric_current_status': 'Status Saat Ini',
        'metric_predicted_aqi': 'AQI Diprediksi',
        'metric_wind_speed': 'PM2.5',
        'metric_visibility': 'Suhu',

        'cv_header': 'Wawasan CrowdVision',
        'cv_explanation': 'Gunakan CrowdVision untuk melihat apakah Anda berada di lingkungan yang aman.',
        'cv_browse_link': 'Klik untuk menelusuri',
        'cv_drag_drop': 'atau seret dan lepas',
        'cv_file_type': 'PNG, JPG, atau JPEG (Maksimal 5MB per file)',
        'cv_button_analyze': 'Analisis Foto dengan CrowdVision',
        'cv_button_analyze_count': 'Analisis {count} Foto',
        'api_title_analyzing': 'Menganalisis...',

        // NEW HAZE INSIGHT KEYS
        'haze_insight_header': 'Wawasan Kabut Asap',
        'haze_insight_text': 'Simulasikan prediksi asap Anda sendiri.',
        'haze_insight_button': 'Mulai Alat Simulasi',

        'footer_mission_header': 'Tim & Misi Kami',
        'footer_mission_text': 'HazeRadar dibangun oleh tim berdedikasi yang berfokus pada teknologi lingkungan dan ilmu data. Kami berusaha untuk menyediakan pemodelan prediksi yang akurat untuk peristiwa asap dan kabut di seluruh Asia Tenggara. Platform kami memanfaatkan data satelit canggih dan pembelajaran mesin (CrowdVision) untuk memberdayakan komunitas lokal dengan informasi kualitas udara yang penting, mempromosikan kesehatan masyarakat dan pengambilan keputusan yang terinformasi.',
        'footer_back_to_map': 'Kembali ke Peta',
        'modal_close': 'Tutup',

        'api_unhealthy_severe': 'AQI ditetapkan sebagai **Tidak Sehat**. Aktivitas di luar ruangan sangat tidak dianjurkan. Minimalkan paparan dan pertimbangkan untuk memakai masker efisiensi tinggi (N95 atau lebih tinggi).',
        'api_unhealthy_sensitive': 'AQI ditetapkan sebagai **Tidak Sehat untuk Kelompok Sensitif**. Batasi aktivitas fisik berat di luar ruangan. Individu dengan kondisi pernapasan harus tetap di dalam ruangan.',
        'api_moderate': 'AQI ditetapkan sebagai **Sedang**. Kualitas udara dapat diterima; namun, orang yang sangat sensitif harus mempertimbangkan untuk membatasi aktivitas fisik berat di luar ruangan.',
        'api_limit_reached': 'Maksimal {count} file tercapai. Tidak dapat menambahkan lagi.',
        'api_file_type_error': 'File {name} bukan jenis gambar yang didukung (PNG/JPG/JPEG).',
        'api_file_size_limit': 'File {name} melebihi batas {size}MB.',
        'api_analysis_required': 'Harap pilih file sebelum mencoba analisis AI.',
        'api_title_complete': 'Analisis CrowdVision Selesai (AQI: {aqi})',
        'api_title_message': 'Pesan',
    },
    // Javanese (jv) - Replacing Hindi
    jv: {
        'title': 'HazeRadar: Predhiksi Asep 3 Dinten',
        'nav_haze_prediction': 'Predhiksi Asep',
        'nav_key_matrix': 'Matriks Utama',
        'nav_cloud_vision': 'CrowdVision',

        'timeline_header': 'Garis Wektu Predhiksi',
        'time_now': 'Saiki',
        'time_4hr': '4 jam',
        'time_8hr': '8 jam',
        'time_12hr': '12 jam',
        'time_16hr': '16 jam',
        'time_20hr': '20 jam',
        'time_24hr': '24 jam',

        'area_list_header': 'Wilayah Kena (Klik Kanggo Delok)',
        'area_list_empty': 'Durung ana panggonan sing disenengi.',

        'metrics_header': 'Metrik Kabut Asep',
        'metric_current_status': 'Status Saiki',
        'metric_predicted_aqi': 'AQI Dipredhiksi',
        'metric_wind_speed': 'PM2.5',
        'metric_visibility': 'Suhu',

        'cv_header': 'Wawasan CrowdVision',
        'cv_explanation': 'Gunakake CrowdVision kanggo ndeleng menawi sampeyan ana ing lingkungan sing aman.',
        'cv_browse_link': 'Klik kanggo ndeleng',
        'cv_drag_drop': 'utawa seret lan culake',
        'cv_file_type': 'PNG, JPG, utawa JPEG (Maksimal 5MB saben file)',
        'cv_button_analyze': 'Analisis Foto karo CrowdVision',
        'cv_button_analyze_count': 'Analisis {count} Foto',
        'api_title_analyzing': 'Nganalisis...',

        // NEW HAZE INSIGHT KEYS
        'haze_insight_header': 'Wawasan Kabut Asep',
        'haze_insight_text': 'Simulasèkake prédisi asep panjenengan dhéwé.',
        'haze_insight_button': 'Miwiti Piranti Simulasi',

        'footer_mission_header': 'Tim lan Misi Kita',
        'footer_mission_text': 'HazeRadar digawe dening tim khusus sing fokus ing teknologi lingkungan lan ilmu data. Kita ngupayakake nyedhiyakake modhèl prediksi sing akurat kanggo kedadeyan asep lan kabut ing saindhènging Asia Kidul-Wétan. Platform kita nggunakake data satelit majeng lan pambelajaran mesin (CrowdVision) kanggo menehi informasi kualitas udara sing penting marang komunitas lokal, ningkatake kesehatan masyarakat lan njupuk keputusan sing informatif.',
        'footer_back_to_map': 'Bali menyang Peta',
        'modal_close': 'Tutup',

        'api_unhealthy_severe': 'AQI ditemtokake minangka **Ora Sehat**. Aktivitas njaba omah banget ora dianjurake. Kurangi paparan lan pertimbangake nganggo topeng efisiensi dhuwur (N95 utluwih dhuwur).',
        'api_unhealthy_sensitive': 'AQI ditemtokake minangka **Ora Sehat kanggo Klompok Sensitif**. Watesi aktivitas fisik abot ing njaba omah. Individu kanthi kondisi ambegan kudu tetep ing njero omah.',
        'api_moderate': 'AQI ditemtokake minangka **Sedheng**. Kualitas udara bisa ditampa; nanging, wong sing sensitif banget kudu nimbang matesi aktivitas fisik abot ing njaba omah.',
        'api_limit_reached': 'Maksimal {count} file wis kecukupan. Ora bisa nambah maneh.',
        'api_file_type_error': 'File {name} dudu jinis gambar sing didhukung (PNG/JPG/JPEG).',
        'api_file_size_limit': 'File {name} ngluwihi wates {size}MB.',
        'api_analysis_required': 'Mangga pilih file sadurunge nyoba analisis AI.',
        'api_title_complete': 'Analisis CrowdVision Rampung (AQI: {aqi})',
        'api_title_message': 'Pesen',
    }
};
// --- END LANGUAGE TRANSLATION DATA ---


// Define buffered bounds for Indonesia
const INDONESIA_BOUNDS = [
    [-12, 90],
    [7, 145]
];

// Define the 7 time periods (mapping slider value 1-7 to a label)
// Define the 7 time periods (mapping slider value 1-7 to a label key)
const TIME_PERIODS = {
    1: "now",   // 0 jam (sekarang)
    2: "4hr",   // +4 jam
    3: "8hr",   // +8 jam
    4: "12hr",  // +12 jam
    5: "16hr",  // +16 jam
    6: "20hr",  // +20 jam
    7: "24hr"   // +24 jam
};

// Mapping slider → jam ke depan (0-24 jam)
const SLIDER_TO_HOURS = {
    1: 0,
    2: 4,
    3: 8,
    4: 12,
    5: 16,
    6: 20,
    7: 24,
};


// Mock data assuming you have a list of affected locations
const affectedAreasData = [
    { id: 1, name: "Kota Bandung", province: "Jawa Barat", lat: -6.9175, lng: 107.6191, aqi: 102, status: 'Moderate' },
    { id: 2, name: "Kota Surabaya", province: "Jawa Timur", lat: -7.2575, lng: 112.7521, aqi: 78, status: 'Good' },
    { id: 3, name: "Kota Medan", province: "Sumatera Utara", lat: 3.5952, lng: 98.6775, aqi: 155, status: 'Unhealthy' },
    { id: 4, name: "Kota Denpasar", province: "Bali", lat: -8.6705, lng: 115.2127, aqi: 45, status: 'Good' },
    { id: 5, name: "Kabupaten Raja Ampat", province: "Papua Barat Daya", lat: -0.528, lng: 130.824, aqi: 22, status: 'Good' },
];

// Map instance variable
let map;
let currentTileLayer;
let geoJsonLayer;

let activeRegionLayer = null;     // kabupaten/kota yang sedang dipilih
let lastHazeAnalysis = null;
let lastHazeCategory = null;


// --- HAZE GNN API CONFIG (MAP BACKEND, REALTIME) ---
const HAZE_API_BASE_URL =
    window.NEXT_PUBLIC_API_URL ||
    'https://haze-radargnnmodelrealtime-production.up.railway.app';

// --- SUPABASE CONFIG (training table gnn_training_data) ---
const SUPABASE_URL = 'https://daxrnmvkpikjvvzgrhko.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRheHJubXZrcGlranZ2emdyaGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2OTkyNjEsImV4cCI6MjA3NjI3NTI2MX0.XWJ_aWUh5Eci5tQSRAATqDXmQ5nh2eHQGzYu6qMcsvQ';

// Ambil 1 row terakhir di gnn_training_data untuk nama kota tertentu
async function fetchSingleCityPredictionFromSupabase(cityName) {
    if (!cityName) return null;

    // buang prefix "Kota"/"Kabupaten" supaya lebih gampang match
    const trimmed = cityName
        .replace(/^Kota\s+/i, '')
        .replace(/^Kabupaten\s+/i, '')
        .trim();

    const params = new URLSearchParams({
        select: '*',
        limit: '1',
        order: 'timestamp.desc',
    });

    // ilike.*Palembang* → supaya "Kota Palembang" juga ketangkep
    params.append('city', `ilike.*${trimmed}*`);

    const url = `${SUPABASE_URL}/rest/v1/gnn_training_data?${params.toString()}`;

    try {
        const resp = await fetch(url, {
            headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
        });

        if (!resp.ok) {
            console.error('Supabase error', resp.status);
            return null;
        }

        const rows = await resp.json();
        if (!Array.isArray(rows) || !rows.length) {
            console.log('Supabase: no rows for', trimmed);
            return null;
        }

        const row = rows[0];
        console.log('Supabase row for', trimmed, row);

        // Bentuk object yang friendly buat fungsi lain
        return {
            ...row,
            city: row.city || cityName,
            region: row.region,
            latitude: row.latitude,
            longitude: row.longitude,
            // alias supaya kode lain bisa baca langsung
            predicted_pm25: row.target_pm25_24h,
            pm25: row.target_pm25_24h,
            current_aqi: row.current_aqi,
            aqi: row.current_aqi,
            temperature: row.temperature,
        };
    } catch (err) {
        console.error('Supabase fetch failed', err);
        return null;
    }
}

const hazeAPI = {
    // Health check – root endpoint (sama persis dengan gnn_real_time.html)
    async getHealth() {
        const response = await fetch(`${HAZE_API_BASE_URL}/`);
        if (!response.ok) {
            throw new Error(`Health check failed: ${response.status}`);
        }
        return response.json();
    },

    // Stats global (opsional, tapi ada di backend realtime)
    async getStats() {
        const response = await fetch(`${HAZE_API_BASE_URL}/api/stats`);
        if (!response.ok) {
            throw new Error(`Stats request failed: ${response.status}`);
        }
        return response.json();
    },

    // List semua prediksi kota saat ini
    async getCurrentPredictions() {
        const response = await fetch(
            `${HAZE_API_BASE_URL}/api/predictions/current`
        );
        if (!response.ok) {
            throw new Error(
                `Current predictions request failed: ${response.status}`
            );
        }
        return response.json();
    },

    // Prediksi 1 kota berdasarkan nama
    async getCityPrediction(city) {
        const response = await fetch(
            `${HAZE_API_BASE_URL}/api/predictions/city/${encodeURIComponent(
                city
            )}`
        );
        if (!response.ok) {
            throw new Error(
                `City prediction request failed: ${response.status}`
            );
        }
        return response.json();
    },

    // Forecast per kota (jam ke depan)
    async getCityForecast(city, hours = 72) {
        const url = `${HAZE_API_BASE_URL}/api/forecast/city/${encodeURIComponent(
            city
        )}?hours=${encodeURIComponent(hours)}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `City forecast request failed: ${response.status}`
            );
        }
        return response.json();
    },

    // Trigger manual update di backend (sama seperti tombol Update di gnn_real_time.html)
    async triggerUpdate() {
        const response = await fetch(`${HAZE_API_BASE_URL}/api/update`, {
            method: 'POST'
        });
        if (!response.ok) {
            throw new Error(
                `Update trigger request failed: ${response.status}`
            );
        }
        return response.json();
    }
};

// ====== REAL-TIME GNN CACHE (from /api/predictions/current) ======
let gnnPredictions = [];
let gnnMarkerLayer = null;
// Cache Supabase per kota biar nggak bolak-balik hit REST
const citySupabaseCache = new Map();

async function getCityFromSupabaseCached(cityName) {
    if (!cityName) return null;
    const key = cityName.toLowerCase();

    if (citySupabaseCache.has(key)) {
        return citySupabaseCache.get(key);
    }

    const row = await fetchSingleCityPredictionFromSupabase(cityName);
    citySupabaseCache.set(key, row || null);
    return row;
}


// Palet warna kategori AQI – sama seperti di gnn_real_time.html
const GNN_AQI_COLORS = {
    'Good': '#10b981',
    'Moderate': '#f59e0b',
    'Unhealthy for Sensitive': '#f97316',
    'Unhealthy': '#ef4444',
    'Very Unhealthy': '#7c3aed',
    'Hazardous': '#6b0216'
};

function gnnCategoryToColor(category) {
    if (!category) return '#94a3b8'; // abu-abu default
    return GNN_AQI_COLORS[category] || '#94a3b8';
}

// helper umum utk cari field (aqi, pm25, temperature) dengan banyak kemungkinan nama
function pickField(obj, names, regexes = []) {
    if (!obj || typeof obj !== 'object') return null;

    // 1) coba list nama yang eksplisit
    for (const n of names) {
        if (n in obj && obj[n] != null) {
            return obj[n];
        }
    }

    // 2) kalau masih gagal, scan semua key dengan regex
    const keys = Object.keys(obj);
    for (const re of regexes) {
        const key = keys.find(k => re.test(k));
        if (key && obj[key] != null) {
            return obj[key];
        }
    }
    return null;
}

function ensureGnnMarkerLayer() {
    if (!map) return null;
    if (!gnnMarkerLayer) {
        gnnMarkerLayer = L.layerGroup().addTo(map);
    }
    return gnnMarkerLayer;
}


// Render bullet kota di atas peta utama
// Render bullet kota di atas peta utama
function renderGNNCityMarkers(predictions) {
    const layer = ensureGnnMarkerLayer();
    if (!layer || !Array.isArray(predictions)) return;

    layer.clearLayers();

    const latlngs = [];

    predictions.forEach((p) => {
        const lat = p.latitude ?? p.lat;
        const lng = p.longitude ?? p.lon ?? p.lng;
        if (typeof lat !== 'number' || typeof lng !== 'number') return;

        // Opsional: filter kira-kira area Indonesia
        if (lat < -15 || lat > 10 || lng < 90 || lng > 150) {
            return;
        }

        // <<< PENTING: pakai pickField supaya nama kolom apapun tetap ketangkep >>>
        const pm25 = pickField(
            p,
            [
                'predicted_pm25',
                'pm25',
                'pm_25',
                'pm2_5',
                'pm_2_5',
                'target_pm25_24h',
                'target_pm_25_24h'
            ],
            [/pm.?2\.?5/i, /pm25/i]
        );

        const aqi = pickField(
            p,
            ['predicted_aqi', 'aqi', 'current_aqi', 'aqi_value', 'aqi_score'],
            [/aqi/i]
        );

        const category = p.aqi_category || p.category || null;
        const uncertainty = p.uncertainty ?? p.model_uncertainty;
        const cityName = p.city || p.region || p.name || 'Location';

        const color = gnnCategoryToColor(category);
        const radius = Math.max(
            8,
            Math.min(24, pm25 != null ? Number(pm25) / 2 : 10)
        );

        const marker = L.circleMarker([lat, lng], {
            radius,
            color: '#1f2937',
            fillColor: color,
            fillOpacity: 0.9,
            weight: 1
        });

        const pm25Display =
            pm25 == null
                ? '-'
                : Number.isNaN(Number(pm25))
                    ? String(pm25)
                    : Number(pm25).toFixed(2);

        let popupHtml = `<div class="popup-header">${cityName}</div><ul class="popup-metric-list">`;
        if (aqi != null) {
            popupHtml += `<li><span>AQI (predicted)</span><span>${aqi}</span></li>`;
        }
        if (pm25 != null) {
            popupHtml += `<li><span>PM2.5</span><span>${pm25Display} µg/m³</span></li>`;
        }
        if (category) {
            popupHtml += `<li><span>Category</span><span>${category}</span></li>`;
        }
        if (typeof uncertainty === 'number') {
            popupHtml += `<li><span>Uncertainty</span><span>${uncertainty.toFixed(
                2
            )}%</span></li>`;
        }
        popupHtml += `</ul>`;

        marker.bindPopup(popupHtml);

        // opsional: kalau mau klik dot langsung update haze matrix juga
        marker.on('click', async () => {
            let analysis = { ...p }; // copy objek GNN

            const pmIsZero =
                (analysis.predicted_pm25 == null || Number(analysis.predicted_pm25) === 0) &&
                (analysis.pm25 == null || Number(analysis.pm25) === 0);

            const aqiIsZero =
                (analysis.current_aqi == null || Number(analysis.current_aqi) === 0) &&
                (analysis.aqi == null || Number(analysis.aqi) === 0);

            // kalau GNN basically kosong → coba ambil dari Supabase
            if (pmIsZero && aqiIsZero) {
                const cityGuess = analysis.city || analysis.region || analysis.name;
                const supaRow = await fetchSingleCityPredictionFromSupabase(cityGuess);
                if (supaRow) {
                    analysis = { ...analysis, ...supaRow };
                }
            }

            applyAnalysisToHazeMatrix(analysis);
        });


        marker.addTo(layer);
        latlngs.push([lat, lng]);
    });

    if (latlngs.length && map) {
        const bounds = L.latLngBounds(latlngs);
        map.fitBounds(bounds, { maxZoom: 7, padding: [30, 30] });
    }
}



// Cari prediksi kota terdekat dari koordinat tertentu
// (dipakai untuk “GNN Haze Insight” di popup provinsi)
function findNearestPredictionForCoord(lat, lng) {
    if (!Array.isArray(gnnPredictions) || !gnnPredictions.length) {
        return null;
    }

    let best = null;
    let bestDistSq = Infinity;

    gnnPredictions.forEach((p) => {
        const plat = p.latitude ?? p.lat;
        const plng = p.longitude ?? p.lon ?? p.lng;
        if (typeof plat !== 'number' || typeof plng !== 'number') return;

        const dLat = plat - lat;
        const dLng = plng - lng;
        const distSq = dLat * dLat + dLng * dLng;

        if (distSq < bestDistSq) {
            bestDistSq = distSq;
            best = p;
        }
    });

    return best;
}

// Load semua prediksi kota realtime sekali di awal
async function loadGNNCityPredictions() {
    try {
        const data = await hazeAPI.getCurrentPredictions();
        if (!Array.isArray(data)) {
            console.warn(
                'Unexpected predictions payload from GNN backend',
                data
            );
            return;
        }
        gnnPredictions = data;
        renderGNNCityMarkers(data);
        renderAffectedAreas();
        console.log(`Loaded ${data.length} real-time GNN predictions`);
    } catch (err) {
        console.error('Failed to load real-time GNN predictions', err);
    }
}


function getRegionKeyFromFeature(feature) {
    const props = feature.properties || {};
    return (
        props.KODE_KAB ||
        props.KABUPATEN ||
        props.KODE_PROV ||
        props.PROVINSI ||
        feature.id
    );
}

function buildRegionAnalysisHTML(analysis) {
    if (!analysis) return '';

    // backend kadang kirim { prediction: {...} }
    const result = analysis.prediction || analysis;

    // --- LANGSUNG PAKAI FIELD SUPABASE DULU ---
    const pm25 =
        result.target_pm25_24h ??        // Supabase
        result.predicted_pm25 ??         // GNN
        result.pm25 ?? result.pm_25 ??   // jaga-jaga
        null;

    const aqi =
        result.current_aqi ??            // Supabase
        result.predicted_aqi ??          // GNN
        result.aqi ??                    // jaga-jaga
        null;

    const temperature =
        result.temperature ??            // Supabase
        result.temp ??                   // jaga-jaga
        null;

    const category = result.aqi_category || result.category || null;
    const confidence = result.confidence ?? result.model_confidence ?? null;
    const note = result.health_message || result.health_advice || '';

    const hasCore =
        pm25 != null || aqi != null || temperature != null ||
        category || confidence != null || note;

    // Kalau data tetap aneh, tampilkan raw JSON saja
    if (!hasCore) {
        return `
            <hr class="popup-divider" />
            <div class="popup-subheader">GNN Haze Insight</div>
            <pre class="popup-raw-json">${JSON.stringify(result, null, 2)}</pre>
        `;
    }

    let html = `
        <hr class="popup-divider" />
        <div class="popup-subheader">GNN Haze Insight</div>
        <ul class="popup-metric-list">
    `;

    if (aqi != null) {
        html += `<li><span>AQI</span><span>${aqi}</span></li>`;
    }

    if (pm25 != null) {
        const pmNum = Number(pm25);
        const pmText = Number.isNaN(pmNum)
            ? String(pm25)
            : pmNum.toFixed(2);
        html += `<li><span>PM2.5</span><span>${pmText} µg/m³</span></li>`;
    }

    if (temperature != null) {
        const tNum = Number(temperature);
        const tText = Number.isNaN(tNum)
            ? String(temperature)
            : tNum.toFixed(1);
        html += `<li><span>Temperature</span><span>${tText} °C</span></li>`;
    }

    if (category) {
        html += `<li><span>Category</span><span>${category}</span></li>`;
    }

    if (confidence != null) {
        html += `<li><span>Model confidence</span><span>${confidence}%</span></li>`;
    }

    html += `</ul>`;

    if (note) {
        html += `<p class="popup-note">${note}</p>`;
    }

    return html;
}


// Bangun HTML kecil yang disisipkan ke dalam popup
async function fetchRegionAnalysisForLayer(feature, layer) {
    const key = getRegionKeyFromFeature(feature);
    if (!key || !map) return;

    const props = feature.properties || {};
    const regionName =
        props.NAMA_KAB ||
        props.NAMA_KOTA ||
        props.NAME ||
        props.nama ||
        props.Name ||
        props.PROVINSI ||
        null;

    try {
        // pastikan 7 dots GNN sudah ada
        if (!Array.isArray(gnnPredictions) || !gnnPredictions.length) {
            await loadGNNCityPredictions();
        }

        // ambil pusat polygon (fallback ke center map kalau gagal)
        let center;
        try {
            const bounds = layer.getBounds && layer.getBounds();
            center = bounds && bounds.getCenter ? bounds.getCenter() : map.getCenter();
        } catch (e) {
            console.warn('Failed to get bounds, using map center instead');
            center = map.getCenter();
        }

        let nearest = null;
        if (Array.isArray(gnnPredictions) && gnnPredictions.length && center) {
            nearest = findNearestPredictionForCoord(center.lat, center.lng);
        }

        // cek apakah data GNN kosong / 0
        const gnnLooksEmpty =
            !nearest ||
            (
                (nearest.predicted_pm25 == null || Number(nearest.predicted_pm25) === 0) &&
                (nearest.pm25 == null || Number(nearest.pm25) === 0) &&
                (nearest.current_aqi == null || Number(nearest.current_aqi) === 0) &&
                (nearest.aqi == null || Number(nearest.aqi) === 0)
            );

        let supabaseRow = null;
        if (gnnLooksEmpty) {
            const cityGuess =
                nearest?.city ||
                nearest?.region ||
                regionName;
            supabaseRow = await fetchSingleCityPredictionFromSupabase(cityGuess);
        }

        // merge kalau Supabase ada data
        let finalAnalysis = nearest;
        if (supabaseRow) {
            finalAnalysis = { ...(nearest || {}), ...supabaseRow };
        }

        if (!finalAnalysis) {
            layer.setPopupContent(
                layer.basePopupContent +
                `<hr class="popup-divider">
                 <div class="popup-subheader">GNN Haze Insight</div>
                 <p class="popup-note">
                    No real-time / training data available yet for this region.
                 </p>`
            );
            return;
        }

        regionAnalysisCache.set(key, finalAnalysis);

        const html = buildRegionAnalysisHTML(finalAnalysis);
        if (html && layer.basePopupContent) {
            layer.setPopupContent(layer.basePopupContent + html);
        } else {
            layer.setPopupContent(layer.basePopupContent);
        }

        // ini yang ngisi card "Haze Metrics"
        applyAnalysisToHazeMatrix(finalAnalysis);

    } catch (err) {
        console.error(
            'Failed to derive haze analysis for region:',
            err
        );
        layer.setPopupContent(
            layer.basePopupContent +
            `<hr class="popup-divider">
             <div class="popup-subheader">GNN Haze Insight</div>
             <p class="popup-note">
                Failed to load analysis. Please try again.
             </p>`
        );
    }
}

// --- helper: ekstrak lat/lng + AQI + kategori dari 1 objek prediksi kota ---
// --- helper: ekstrak lat/lng + AQI + kategori dari 1 objek prediksi kota ---
// pakai logic yang sama dengan applyAnalysisToHazeMatrix
function extractCityMetrics(p) {
    if (!p || typeof p !== 'object') return {};

    // kebanyakan data flat di level atas; kalau suatu saat ada p.prediction, pakai itu
    const base = p.prediction || p;

    const lat = p.latitude ?? p.lat ?? base.latitude ?? base.lat ?? null;
    const lng = p.longitude ?? p.lon ?? p.lng ?? base.longitude ?? base.lon ?? null;

    // PM2.5 → sama seperti di applyAnalysisToHazeMatrix
    let pm25 =
        base.target_pm25_24h ??        // Supabase style
        base.predicted_pm25 ??         // GNN style
        base.pm25 ?? base.pm_25 ??     // jaga-jaga
        null;

    // AQI → ambil dulu dari beberapa kemungkinan field
    let aqi =
        base.current_aqi ??            // Supabase
        base.predicted_aqi ??          // GNN
        base.aqi ??                    // generic
        null;

    const categoryRaw = base.aqi_category || base.category || null;

    // --- normalisasi AQI ---
    const aqiNum = aqi != null ? Number(aqi) : null;

    // kalau null, 0, atau bukan angka → anggap "nggak ada AQI"
    if (aqi == null || Number.isNaN(aqiNum) || aqiNum === 0) {
        aqi = estimateAQIFromPm25(pm25, categoryRaw); // pakai PM2.5 / kategori
    } else {
        aqi = aqiNum;
    }

    // nama + provinsi buat ditampilkan
    const name =
        base.city || p.city ||
        base.region || p.region ||
        base.name || p.name ||
        'Location';

    const province =
        base.province || p.province ||
        base.region || p.region || '';

    // kategori final (kalau backend nggak kirim, derive dari angka AQI)
    const category =
        categoryRaw ||
        (typeof aqi === 'number' && !Number.isNaN(aqi)
            ? (aqi <= 50 ? 'Good'
                : aqi <= 100 ? 'Moderate'
                    : aqi <= 150 ? 'Unhealthy (Sensitive)'
                        : aqi <= 200 ? 'Unhealthy'
                            : aqi <= 300 ? 'Very Unhealthy'
                                : 'Hazardous')
            : null);

    return { lat, lng, pm25, aqi, category, name, province };
}



// --- helper: estimasi AQI dari PM2.5 (kalau backend belum kirim angka AQI) ---
function estimateAQIFromPm25(pm25, categoryRaw) {
    // Kalau PM2.5 nggak ada → coba kira-kira dari kategori (Good, Moderate, dst)
    if (pm25 == null || isNaN(Number(pm25))) {
        if (!categoryRaw) return null;
        const cat = String(categoryRaw).toLowerCase();
        if (cat.includes('good')) return 50;
        if (cat.includes('moderate')) return 100;
        if (cat.includes('sensitive')) return 150;
        if (cat.includes('very')) return 300;
        if (cat.includes('hazard')) return 400;
        if (cat.includes('unhealthy')) return 200;
        return null;
    }

    const C = Number(pm25);

    // US EPA PM2.5 breakpoints
    const ranges = [
        { cLow: 0.0, cHigh: 12.0, iLow: 0, iHigh: 50 },
        { cLow: 12.1, cHigh: 35.4, iLow: 51, iHigh: 100 },
        { cLow: 35.5, cHigh: 55.4, iLow: 101, iHigh: 150 },
        { cLow: 55.5, cHigh: 150.4, iLow: 151, iHigh: 200 },
        { cLow: 150.5, cHigh: 250.4, iLow: 201, iHigh: 300 },
        { cLow: 250.5, cHigh: 350.4, iLow: 301, iHigh: 400 },
        { cLow: 350.5, cHigh: 500.4, iLow: 401, iHigh: 500 },
    ];

    for (const bp of ranges) {
        if (C >= bp.cLow && C <= bp.cHigh) {
            const aqi =
                ((bp.iHigh - bp.iLow) / (bp.cHigh - bp.cLow)) *
                (C - bp.cLow) + bp.iLow;
            return Math.round(aqi);
        }
    }

    return null;
}


// --- helper: pilih nilai PM2.5 terbaik dari object result ---
function pickPm25FromResult(result) {
    if (!result) return null;

    const rawPred =
        result.predicted_pm25 ??
        result.pm25 ??
        result.pm_25 ??
        null;

    const rawTarget =
        result.target_pm25_24h ??
        result.target_pm_25_24h ??
        null;

    const predicted = rawPred != null ? Number(rawPred) : null;
    const target = rawTarget != null ? Number(rawTarget) : null;

    // DEBUG optional, bisa dihapus kalau sudah yakin
    console.log('DEBUG PM2.5 fields:', {
        predicted_pm25: rawPred,
        target_pm25_24h: rawTarget
    });

    // Kalau predicted 0 / null dan target ada → pakai target
    if ((predicted == null || predicted === 0) && target != null && !Number.isNaN(target)) {
        return target;
    }

    // Kalau predicted ada dan bukan NaN → pakai predicted
    if (predicted != null && !Number.isNaN(predicted)) {
        return predicted;
    }

    // Terakhir fallback ke target saja
    if (target != null && !Number.isNaN(target)) {
        return target;
    }

    return null;
}


function applyAnalysisToHazeMatrix(analysis) {
    if (!analysis) return;

    const result = analysis.prediction || analysis;
    lastHazeAnalysis = analysis;

    // --- LANGSUNG PAKAI FIELD SUPABASE DULU ---
    let pm25 =
        result.target_pm25_24h ??        // Supabase
        result.predicted_pm25 ??         // GNN
        result.pm25 ?? result.pm_25 ??   // jaga-jaga
        null;

    let aqi =
        result.current_aqi ??            // Supabase
        result.predicted_aqi ??          // GNN
        result.aqi ??                    // jaga-jaga
        null;

    let temperature =
        result.temperature ??            // Supabase
        result.temp ??                   // jaga-jaga
        null;

    const categoryRaw = result.aqi_category || result.category || null;

    // Kalau AQI kosong tapi ada PM2.5/kategori → estimasi
    if (aqi == null) {
        aqi = estimateAQIFromPm25(pm25, categoryRaw);
    }

    // --- AMBIL ELEMEN DOM ---
    const statusEl = document.getElementById('metric-current-haze');
    const aqiEl = document.getElementById('metric-predicted-aqi');
    const pmEl = document.getElementById('metric-wind-speed'); // PM2.5
    const tempEl = document.getElementById('metric-visibility'); // Temperature

    if (!statusEl || !aqiEl || !pmEl || !tempEl) {
        console.warn('Haze matrix elements not found');
        return;
    }

    // --- STATUS / KATEGORI ---
    const category =
        categoryRaw ||
        (typeof aqi === 'number' && !Number.isNaN(aqi)
            ? (aqi <= 50 ? 'Good'
                : aqi <= 100 ? 'Moderate'
                    : aqi <= 150 ? 'Unhealthy (Sensitive)'
                        : aqi <= 200 ? 'Unhealthy'
                            : aqi <= 300 ? 'Very Unhealthy'
                                : 'Hazardous')
            : '-');
    lastHazeCategory = category;
    let statusClass = 'text-teal';
    const catLower = String(category).toLowerCase();
    if (catLower.includes('moderate')) statusClass = 'text-yellow';
    else if (catLower.includes('unhealthy') || catLower.includes('poor'))
        statusClass = 'text-red';
    else if (catLower.includes('hazard')) statusClass = 'text-purple';

    statusEl.textContent = category;
    statusEl.className = `metric-value ${statusClass}`;
    // ⬇⬇ ini yang bikin map merah kalau kategori buruk
    updateMapAlertOverlay(category);

    // --- AQI ---
    if (aqi != null && !Number.isNaN(Number(aqi))) {
        aqiEl.textContent = Math.round(Number(aqi));
    } else {
        aqiEl.textContent = '-';
    }

    // --- PM2.5 ---
    if (pm25 != null) {
        const pmNum = Number(pm25);
        pmEl.textContent = Number.isNaN(pmNum)
            ? String(pm25)
            : `${pmNum.toFixed(2)} µg/m³`;
    } else {
        pmEl.textContent = '-';
    }

    // --- TEMPERATURE ---
    if (temperature != null) {
        const tNum = Number(temperature);
        tempEl.textContent = Number.isNaN(tNum)
            ? String(temperature)
            : `${tNum.toFixed(1)} °C`;
    } else {
        tempEl.textContent = '-';
    }

    console.log('DEBUG haze matrix:', {
        aqi,
        pm25,
        temperature,
        category,
        raw: result,
    });
}





// Cache analisis per provinsi (supaya 1 provinsi tidak berkali-kali call API)
const regionAnalysisCache = new Map();


// Define the dark and light tile layers
const DARK_TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const LIGHT_TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';


// --- DOM ELEMENTS ---
const mapContainer = document.getElementById('map');
const messageOverlay = document.getElementById('message-overlay');
const messageText = document.getElementById('message-text');
const loadingSpinner = document.getElementById('loading-spinner');
const slider = document.getElementById('notch-slider');
const timeLabel = document.getElementById('time-label');

// UPLOADER ELEMENTS
const dropArea = document.getElementById('drop-area');
const fileElem = document.getElementById('fileElem');
const fileList = document.getElementById('file-list');
const uploadButton = document.getElementById('upload-button');
const modalCloseBtn = document.getElementById('modal-close-btn');

// DROPDOWN ELEMENTS
const dropdownToggle = document.getElementById('dropdown-toggle');
const headerDropdownMenu = document.getElementById('header-dropdown-menu');
const dropdownIcon = document.getElementById('dropdown-icon');

// NEW LANGUAGE ELEMENTS
const languageToggle = document.getElementById('language-toggle');
const languageDropdownMenu = document.getElementById('language-dropdown-menu');

// NEW THEME ELEMENTS
const themeToggle = document.getElementById('theme-toggle');
const themeIconMoon = document.getElementById('theme-icon-moon');
const themeIconSun = document.getElementById('theme-icon-sun');

// Set up main elements
const html = document.documentElement;
let uploadedFiles = []; // Array to store files ready for upload


// --- MODAL / MESSAGE BOX FUNCTIONS ---
function showMessage(titleKey, textKey, titleReplacements = {}, textReplacements = {}) {
    const title = t(titleKey, titleReplacements);
    const text = t(textKey, textReplacements);

    const modal = document.getElementById('confirmation-modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').innerHTML = text; // Use innerHTML for bold formatting
    modal.classList.remove('invisible', 'opacity-0');
    modal.classList.add('visible', 'opacity-100');
}

function hideMessage() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.remove('visible', 'opacity-100');
    modal.classList.add('invisible', 'opacity-0');
}


// --- LANGUAGE LOGIC ---
const LANGUAGE_STORAGE_KEY = 'userLanguage';
let currentLang = 'jv';

/** Looks up and returns the translated string for a given key. */
function t(key, replacements = {}) {
    let text = translations[currentLang]?.[key] || translations.en[key] || `[${key}]`;

    for (const [placeholder, value] of Object.entries(replacements)) {
        text = text.replace(new RegExp(`{${placeholder}}`, 'g'), value);
    }
    return text;
}

/** Applies translations to all elements with data-i18n attribute. */
function applyTranslations() {
    document.querySelector('title').textContent = t('title');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');

        if (key === 'cv_button_analyze' || key === 'cv_button_analyze_count') {
            return;
        }

        if (key === 'time_now') {
            const timeLabels = [
                'time_now',
                'time_4hr',
                'time_8hr',
                'time_12hr',
                'time_16hr',
                'time_20hr',
                'time_24hr',
            ];
            const spans = document.querySelector('.time-markers-container').children;
            timeLabels.forEach((tKey, index) => {
                if (spans[index]) spans[index].textContent = t(tKey);
            });
            return;
        }


        el.textContent = t(key);
    });

    updatePredictionUI(TIME_PERIODS[slider.value]);
    renderAffectedAreas();
    renderFileList();
}

/** Loads language preference from local storage or defaults to 'jv'. */
function loadLanguage() {
    const storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLang && translations[storedLang]) {
        currentLang = storedLang;
    } else {
        currentLang = 'jv';
    }
    applyTranslations();
}

/** Handles the click on a language link. */
function setLanguage(langCode) {
    if (currentLang === langCode) return;

    currentLang = langCode;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, langCode);
    applyTranslations();
    languageDropdownMenu.classList.remove('is-open');
}


// --- THEME TOGGLE LOGIC ---

/** Updates the visible theme icon based on the mode. */
function updateThemeIcons(isDarkMode) {
    if (isDarkMode) {
        themeIconMoon.classList.remove('hidden');
        themeIconSun.classList.add('hidden');
    } else {
        themeIconMoon.classList.add('hidden');
        themeIconSun.classList.remove('hidden');
    }
}

let toggleTheme = function () {
    const isCurrentlyDark = html.classList.contains('dark');

    if (isCurrentlyDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateThemeIcons(false);
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcons(true);
    }

    updateMapTheme(); // ganti tile map

    // refresh warna/opacity overlay supaya cocok dengan theme baru
    if (lastHazeCategory) {
        updateMapAlertOverlay(lastHazeCategory);
    }
};


/** Loads theme preference from local storage or defaults to dark. */
function loadTheme() {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDarkMode) {
        html.classList.add('dark');
        updateThemeIcons(true);
    } else {
        html.classList.remove('dark');
        updateThemeIcons(false);
    }
}


// --- NAVIGATION LOGIC ---

// Main Menu Toggle (Full Width)
function toggleDropdown(event) {
    event.stopPropagation();

    const isOpen = headerDropdownMenu.classList.contains('is-open');

    if (isOpen) {
        headerDropdownMenu.classList.remove('is-open');
        dropdownIcon.classList.remove('rotate-180');
        dropdownToggle.classList.remove('is-open');
    } else {
        if (languageDropdownMenu.classList.contains('is-open')) {
            languageDropdownMenu.classList.remove('is-open');
        }
        headerDropdownMenu.classList.add('is-open');
        dropdownIcon.classList.add('rotate-180');
        dropdownToggle.classList.add('is-open');
    }
}

// Language Menu Toggle (Small Width)
function toggleLanguageDropdown(event) {
    event.stopPropagation();

    const isOpen = languageDropdownMenu.classList.contains('is-open');

    if (isOpen) {
        languageDropdownMenu.classList.remove('is-open');
    } else {
        if (headerDropdownMenu.classList.contains('is-open')) {
            toggleDropdown({ stopPropagation: () => { } });
        }
        languageDropdownMenu.classList.add('is-open');
    }
}

// Smooth scrolling logic
function smoothScroll(event) {
    event.preventDefault();

    if (headerDropdownMenu.classList.contains('is-open')) {
        headerDropdownMenu.classList.remove('is-open');
        dropdownIcon.classList.remove('rotate-180');
        dropdownToggle.classList.remove('is-open');
    }

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}


// --- MAP & UI LOGIC ---
function initializeMap() {
    if (!mapContainer) {
        console.error("Map container 'map' not found.");
        messageText.innerText = "Error: Map container not found.";
        loadingSpinner.style.display = 'none';
        return;
    }

    map = L.map('map').setView([-2.5489, 118.0149], 5);
    updateMapTheme();

    // ❌ marker mock Bandung dihapus

    loadGeoJson();            // polygon kabupaten
    loadGNNCityPredictions(); // bullet kota dari backend GNN
}

/** Switches the map tile layer to match the current theme. */
function updateMapTheme() {
    if (!map) return;
    const isDarkMode = html.classList.contains('dark');
    const newUrl = isDarkMode ? DARK_TILE_LAYER : LIGHT_TILE_LAYER;

    if (currentTileLayer) {
        map.removeLayer(currentTileLayer);
    }

    currentTileLayer = L.tileLayer(newUrl, {
        attribution: ATTRIBUTION,
        maxZoom: 18,
    }).addTo(map);

    console.log(`Map switched to ${isDarkMode ? 'Dark' : 'Light'} theme layer.`);
}

// Sekarang overlay hanya untuk kabupaten/kota yang dipilih,
// bukan satu Indonesia penuh.
function updateMapAlertOverlay(category) {
    if (!geoJsonLayer || !activeRegionLayer) {
        // belum ada region yang dipilih → jangan warnai apa-apa
        return;
    }

    const cat = (category || '').toLowerCase();

    // Kalau status bagus / tidak ada kategori → kembalikan ke style default
    if (!cat || cat.includes('good') || cat === '-') {
        geoJsonLayer.resetStyle(activeRegionLayer);
        return;
    }

    const isDark = html.classList.contains('dark');

    let fillColor = '#22c55e'; // default
    if (cat.includes('moderate')) {
        fillColor = '#eab308';           // kuning
    } else if (
        cat.includes('unhealthy') ||     // termasuk “Unhealthy (Sensitive)”
        cat.includes('poor') ||
        cat.includes('hazard')
    ) {
        fillColor = '#ef4444';           // merah
    }

    activeRegionLayer.setStyle({
        color: '#e5e7eb',
        weight: 2,
        fillColor,
        fillOpacity: isDark ? 0.6 : 0.5
    });
}



function updatePredictionUI(timeKey) {
    timeLabel.textContent = t(`time_${timeKey}`);

    const sliderValue = parseInt(slider.value, 10);
    const currentAQI = 100 + (sliderValue - 4) * 20 + Math.floor(Math.random() * 10);
    document.getElementById('metric-predicted-aqi').textContent = currentAQI;

    let status = 'Moderate';
    let statusClass = 'text-yellow';

    if (currentAQI > 200) { status = 'Hazardous'; statusClass = 'text-purple'; }
    else if (currentAQI > 150) { status = 'Unhealthy'; statusClass = 'text-red'; }
    else if (currentAQI > 100) { status = 'Moderate'; statusClass = 'text-yellow'; }
    else { status = 'Good'; statusClass = 'text-teal'; }

    const statusEl = document.getElementById('metric-current-haze');
    statusEl.textContent = status;
    statusEl.className = `metric-value ${statusClass}`;

    // 🔥 sambungkan ke overlay map
    lastHazeCategory = status;
    updateMapAlertOverlay(status);

    console.log(`Map visualization needs update for time: ${timeKey}`);
}



function handleSliderChange(event) {
    const sliderValue = parseInt(event.target.value, 10);
    const timeKey = TIME_PERIODS[sliderValue];
    updatePredictionUI(timeKey);
}

async function getFuturePrediction(city, hours) {
    if (!city || !hours) return;

    try {
        const futureResponse = await fetch(
            `${HAZE_API_BASE_URL}/api/forecast/city/${encodeURIComponent(city)}?hours=${hours}`
        );
        const futureData = await futureResponse.json();

        if (!futureData || futureData.predicted_pm25 === undefined) {
            console.error("Future forecast unavailable:", futureData);
            return null;
        }

        console.log(`Future Forecast → ${city} in ${hours}h:`, futureData.predicted_pm25);
        return futureData.predicted_pm25;
    } catch (error) {
        console.error("Future Prediction Error:", error);
        return null;
    }
}


// --- GEOJSON AND LIST LOGIC ---
const defaultStyle = {
    color: "#a5f3fc",
    weight: 1,
    opacity: 0.8,
    fillColor: "#14b8a6",
    fillOpacity: 0.4
};

const highlightStyle = {
    color: "#e0f2fe",      // biru super muda
    weight: 2,
    opacity: 1,
    fillColor: "#67e8f9",  // cyan-300
    fillOpacity: 0.5
};



function onEachFeature(feature, layer) {
    let popupContent = '';
    const props = feature.properties || {};
    const name =
        props.NAMA_KAB ||
        props.NAMA_KOTA ||
        props.NAME ||
        props.nama ||
        props.Name ||
        props.PROVINSI;

    if (name) {
        popupContent += `<div class="popup-header">${name}</div>`;
    } else {
        popupContent += `<div class="popup-header">GeoJSON Feature</div>`;
    }

    if (props && Object.keys(props).length) {
        popupContent += '<table class="popup-content-table">';
        for (const key in props) {
            if (key.startsWith('_') || key === 'id' || key === 'bbox') continue;
            popupContent += `
                <tr>
                    <td>${key}</td>
                    <td>${props[key]}</td>
                </tr>
            `;
        }
        popupContent += '</table>';
    } else {
        popupContent += '<p>No properties found for this feature.</p>';
    }

    // Bind popup awal + simpan base content untuk ditambah GNN
    layer.bindPopup(popupContent, { maxHeight: 220 });
    layer.basePopupContent = popupContent;

    layer.on({
        mouseover: function (e) {
            const l = e.target;

            // hanya highlight kalau BUKAN region yang sedang dipilih
            if (l !== activeRegionLayer) {
                l.setStyle(highlightStyle);
                if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                    l.bringToFront();
                }
            }
        },

        mouseout: function (e) {
            if (!geoJsonLayer) return;
            const l = e.target;

            if (l !== activeRegionLayer) {
                // kabupaten lain → balikin ke style default
                geoJsonLayer.resetStyle(l);
            } else if (lastHazeCategory) {
                // kabupaten terpilih → tetap pakai warna kategori
                updateMapAlertOverlay(lastHazeCategory);
            }
        },

        click: function (e) {
            const l = e.target;
            const key = getRegionKeyFromFeature(feature);

            // reset warna region lama kalau ada
            if (activeRegionLayer && geoJsonLayer) {
                geoJsonLayer.resetStyle(activeRegionLayer);
            }
            // set region baru yang dipilih
            activeRegionLayer = l;

            // (opsional) kalau mau, jangan pakai flyTo supaya map tidak loncat
            // map.flyTo(e.latlng, 10, { duration: 0.8 });

            // ---- kode klik lama tetap seperti semula di bawah ini ----
            if (regionAnalysisCache.has(key)) {
                const cached = regionAnalysisCache.get(key);
                const html = buildRegionAnalysisHTML(cached);

                if (html && l.basePopupContent) {
                    l.setPopupContent(l.basePopupContent + html);
                }

                l.openPopup();
                applyAnalysisToHazeMatrix(cached);
                return;
            }

            l.setPopupContent(
                l.basePopupContent +
                `<hr class="popup-divider">
             <div class="popup-subheader">GNN Haze Insight</div>
             <p class="popup-note">Loading analysis...</p>`
            );
            l.openPopup();

            fetchRegionAnalysisForLayer(feature, l);
        }
    });


}


async function renderAffectedAreas() {
    const listContainer = document.getElementById('affected-areas-list');
    const noCardsMessage = document.getElementById('no-cards-message');
    if (!listContainer || !noCardsMessage) return; // safety

    listContainer.innerHTML = '';

    // ---- 1) Pakai titik GNN kalau sudah ada ----
    let items = [];

    if (Array.isArray(gnnPredictions) && gnnPredictions.length) {
        // 1.1. Enrich data GNN pakai Supabase kalau kelihatan "kosong" (0 semua)
        const enriched = await Promise.all(
            gnnPredictions.map(async (p) => {
                const base = p.prediction || p;

                const pmRaw =
                    base.target_pm25_24h ??
                    base.predicted_pm25 ??
                    base.pm25 ?? base.pm_25 ?? null;

                const aqiRaw =
                    base.current_aqi ??
                    base.predicted_aqi ??
                    base.aqi ?? null;

                const pmNum = pmRaw != null ? Number(pmRaw) : null;
                const aqiNum = aqiRaw != null ? Number(aqiRaw) : null;

                const looksEmpty =
                    (pmRaw == null || Number.isNaN(pmNum) || pmNum === 0) &&
                    (aqiRaw == null || Number.isNaN(aqiNum) || aqiNum === 0);

                if (!looksEmpty) {
                    // data GNN sudah oke → pakai apa adanya
                    return p;
                }

                // Kalau kosong → coba ambil 1 baris terakhir dari Supabase
                const cityGuess =
                    base.city || p.city ||
                    base.region || p.region ||
                    base.name || p.name;

                if (!cityGuess) return p;

                const supaRow = await getCityFromSupabaseCached(cityGuess);
                if (!supaRow) return p;

                // Gabungkan data Supabase ke GNN (jangan buang field lain)
                return { ...p, ...supaRow };
            })
        );

        // Update global supaya fungsi lain juga pakai versi yang sudah diperkaya
        gnnPredictions = enriched;

        // 1.2. Build items untuk kartu
        items = enriched
            .map((p, index) => {
                const { lat, lng, aqi, category, name, province } = extractCityMetrics(p);

                if (typeof lat !== 'number' || typeof lng !== 'number') return null;

                const status = category || 'Good';

                // 👉 0 juga dianggap "nggak ada data", jadi tampilkan "-" saja
                const aqiValue =
                    aqi != null &&
                        !Number.isNaN(Number(aqi)) &&
                        Number(aqi) !== 0
                        ? Math.round(Number(aqi))
                        : null; // nanti dirender jadi '-'

                return {
                    id: p.id ?? index + 1,
                    name,
                    province,
                    lat,
                    lng,
                    aqi: aqiValue,
                    status,
                };
            })
            .filter(Boolean);
    }

    // 2) Optional fallback ke dummy data kalau GNN gagal total
    if (!items.length && Array.isArray(affectedAreasData) && affectedAreasData.length) {
        items = affectedAreasData;
    }

    if (!items.length) {
        noCardsMessage.classList.remove('hidden');
        return;
    }
    noCardsMessage.classList.add('hidden');

    // 3) Render kartu
    items.forEach((item) => {
        const statusLower = String(item.status).toLowerCase();
        const statusClass =
            statusLower.includes('unhealthy') || statusLower.includes('hazard')
                ? 'text-red'
                : statusLower.includes('moderate')
                    ? 'text-yellow'
                    : 'text-teal';

        const cardHtml = `
            <div data-lat="${item.lat}" data-lng="${item.lng}"
                 class="card-item group hover:shadow-lg">
                <div>
                    <p>${item.name}</p>
                    <p class="text-sm">${item.province || ''}</p>
                </div>
                <div class="text-right">
                    <p class="text-sm font-bold ${statusClass}">${item.status}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        AQI: ${item.aqi ?? '-'}
                    </p>
                </div>
            </div>
        `;
        listContainer.insertAdjacentHTML('beforeend', cardHtml);
    });

    // 4) Event click kartu tetap sama
    document.querySelectorAll('.card-item').forEach((card) => {
        card.addEventListener('click', async function () {
            const lat = parseFloat(this.getAttribute('data-lat'));
            const lng = parseFloat(this.getAttribute('data-lng'));

            if (map && !Number.isNaN(lat) && !Number.isNaN(lng)) {
                map.flyTo([lat, lng], 10, { duration: 1.5 });
            }

            this.classList.add('ring-4', 'ring-cyan-500', 'ring-opacity-50');
            setTimeout(() => {
                this.classList.remove(
                    'ring-4',
                    'ring-cyan-500',
                    'ring-opacity-50'
                );
            }, 1000);

            const nearest = findNearestPredictionForCoord(lat, lng);
            if (!nearest) return;

            let analysis = { ...nearest };

            const pmIsZero =
                (analysis.predicted_pm25 == null ||
                    Number(analysis.predicted_pm25) === 0) &&
                (analysis.pm25 == null || Number(analysis.pm25) === 0);

            const aqiIsZero =
                (analysis.current_aqi == null ||
                    Number(analysis.current_aqi) === 0) &&
                (analysis.aqi == null || Number(analysis.aqi) === 0);

            if (pmIsZero && aqiIsZero) {
                const cityGuess =
                    analysis.city || analysis.region || analysis.name;
                const supaRow =
                    await getCityFromSupabaseCached(cityGuess);
                if (supaRow) {
                    analysis = { ...analysis, ...supaRow };
                }
            }

            applyAnalysisToHazeMatrix(analysis);
        });
    });
}





async function loadGeoJson() {
    try {
        const response = await fetch('kabupaten.JSON');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}. The GeoJSON file 'kabupaten.JSON' could not be loaded.`);
        }

        const data = await response.json();

        geoJsonLayer = L.geoJSON(data, {
            style: defaultStyle,
            onEachFeature: onEachFeature
        }).addTo(map);

        map.fitBounds(geoJsonLayer.getBounds());

        map.setMaxBounds(INDONESIA_BOUNDS);

        const minZoomLevel = map.getZoom();
        map.setMinZoom(minZoomLevel);

        messageOverlay.style.display = 'none';

        map.invalidateSize();

    } catch (error) {
        console.error('Error loading or parsing GeoJSON:', error);
        messageText.innerText = `Error loading map data: ${error.message}. Please ensure 'kabupaten.JSON' is available.`;
        loadingSpinner.style.display = 'none';
        messageOverlay.style.backgroundColor = 'rgba(127, 29, 29, 0.85)';
        messageText.style.color = '#fca5a5';
    }
}



// --- FILE UPLOADER LOGIC ---

// Helper function to format file size
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Renders the list of files to be uploaded
function renderFileList() {
    fileList.innerHTML = '';
    if (uploadedFiles.length === 0) {
        uploadButton.disabled = true;
        uploadButton.textContent = t('cv_button_analyze');
        return;
    }

    uploadButton.disabled = false;

    const count = uploadedFiles.length;
    let buttonText = t('cv_button_analyze_count', { count: count });
    if (currentLang === 'en' && count !== 1) {
        buttonText += 's';
    }
    uploadButton.textContent = buttonText;


    uploadedFiles.forEach((file, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'file-list-item';
        listItem.innerHTML = `
            <div class="file-list-item-info">
                <svg xmlns="http://www.w3.org/2000/svg" class="file-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                </svg>
                <span class="file-name">${file.name}</span>
            </div>
            <div class="file-size-info">
                <span class="file-size-text">${formatBytes(file.size)}</span>
                <button data-index="${index}" class="remove-file-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        `;
        fileList.appendChild(listItem);
    });

    document.querySelectorAll('.remove-file-btn').forEach(button => {
        button.addEventListener('click', function () {
            const indexToRemove = parseInt(this.getAttribute('data-index'));
            uploadedFiles.splice(indexToRemove, 1);
            renderFileList();
        });
    });
}

// Process files from either drag/drop or input click
// Process files from either drag/drop or input click
function handleFiles(files) {
    const maxFiles = 1; // kita analisis satu foto per kali jalan
    const maxSizeMB = 5;
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (!file.type.startsWith('image/')) {
            // kalau sebelumnya pakai showMessage, bisa di-skip atau dibiarkan
            // showMessage('api_title_message', 'api_file_type_error', {}, { name: file.name });
            continue;
        }

        if (file.size > maxSizeBytes) {
            // showMessage('api_title_message', 'api_file_size_limit', {}, { name: file.name, size: maxSizeMB });
            continue;
        }

        if (uploadedFiles.length < maxFiles) {
            // Selalu pakai foto terbaru sebagai target analisis
            uploadedFiles = [file];
        } else {
            // showMessage('api_title_message', 'api_limit_reached', {}, { count: maxFiles });
            break;
        }
    }

    // --- UPDATE PREVIEW ---
    const previewImg = document.getElementById('preview');
    if (previewImg) {
        if (uploadedFiles.length > 0) {
            previewImg.src = URL.createObjectURL(uploadedFiles[0]);
            previewImg.classList.remove('hidden');
        } else {
            previewImg.classList.add('hidden');
            previewImg.src = '';
        }
    }

    // --- RESET HASIL ANALISIS SEBELUMNYA ---
    const resultBox = document.getElementById('result');
    if (resultBox) {
        resultBox.innerHTML = '';          // hapus teks hasil lama
        resultBox.classList.add('hidden'); // sembunyikan sampai analisis berikutnya
    }

    // Kembalikan teks tombol ke default (kalau sebelumnya sempat "Analyzing...")
    uploadButton.textContent = t('cv_button_analyze');

    // Reset input & render ulang daftar file
    fileElem.value = '';
    renderFileList(); // fungsi ini yang mengatur disabled/enabled tombol berdasarkan uploadedFiles
}



// --- MOCK API INTEGRATION FUNCTION ---
async function uploadFile() {
    // --- CrowdVision suggestions (based on prediction) ---
    const CROWDVISION_SUGGESTIONS_HAZY = [
        "Limit outdoor activities.",
        "Wear a mask if you need to go outside.",
        "Keep windows and doors closed to reduce smoke.",
        "Follow official air quality updates.",
        "Drink plenty of water and rest well."
    ];

    const CROWDVISION_SUGGESTIONS_CLEAR = [
        "Air is relatively clean, enjoy outdoor activities wisely.",
        "Open windows to improve indoor air circulation.",
        "Stay prepared in case conditions change suddenly.",
        "Protect your lungs by avoiding smoke exposure.",
        "Share air quality information with people around you."
    ];


    if (uploadedFiles.length === 0) {
        return;
    }

    const fileToAnalyze = uploadedFiles[0];
    const formData = new FormData();
    formData.append("image", fileToAnalyze);

    // Update state tombol
    uploadButton.textContent = t('api_title_analyzing');
    uploadButton.disabled = true;

    const resultBox = document.getElementById('result');
    if (resultBox) {
        resultBox.classList.remove('hidden');
        resultBox.innerHTML = '⏳ Analyzing...';
    }

    try {
        const response = await fetch("https://haze-radarcrowdvision-production.up.railway.app/predict", {
            method: "POST",
            body: formData
        });

        // Baca sebagai text dulu
        const rawText = await response.text();

        if (!response.ok) {
            // Kalau status 4xx/5xx, tunjukkan info status + sedikit isi body
            const snippet = rawText.slice(0, 200);
            throw new Error(`Server error (${response.status}): ${snippet}`);
        }

        let data;
        try {
            data = JSON.parse(rawText);
        } catch (e) {
            // Kalau bukan JSON, tampilkan cuplikan respon
            const snippet = rawText.slice(0, 200);
            throw new Error(`Server returned non-JSON response: ${snippet}`);
        }

        console.log('CrowdVision response:', data);

        if (!data || data.success === false) {
            const errorMessage = data?.error || 'Unknown error.';
            if (resultBox) {
                resultBox.innerHTML = "⚠️ Analysis failed: " + errorMessage;
            }
            return;
        }

        // Ambil nilai dari API
        // Ambil nilai dari API
        const prediction = data.prediction || 'Unknown';
        const confidence = data.confidence ?? null;           // tidak akan ditampilkan
        const visibilityScore = data.visibility_score ?? null;
        const metrics = data.metrics || {};
        const contrast = metrics.contrast ?? null;            // tidak akan ditampilkan
        const edgeDensity = metrics.edge_density ?? null;
        const brightness = metrics.brightness ?? null;

        // Tentukan daftar saran berdasarkan prediction
        let suggestions = [];
        const predLower = (prediction || '').toLowerCase();

        if (
            predLower.includes('haze') ||
            predLower.includes('hazy') ||
            predLower.includes('smoke')
        ) {
            suggestions = CROWDVISION_SUGGESTIONS_HAZY;
        } else if (predLower.includes('clear')) {
            suggestions = CROWDVISION_SUGGESTIONS_CLEAR;
        }


        // === Bangun HTML hasil analisis dengan gaya card CloudVision ===
        let html = `
                <div class="cv-result-header">
                    <div class="cv-result-icon">✔</div>
                    <div>
                        <div class="cv-result-title">Analysis Complete</div>
                        <div class="cv-result-subtitle">
                            ${visibilityScore !== null
                ? `Estimated visibility score: <span class="cv-chip">${visibilityScore}</span>`
                : 'Latest CrowdVision snapshot'
            }
                        </div>
                    </div>
                </div>

                <div class="cv-result-grid">
                    <div class="cv-result-item">
                        <span class="cv-label">Prediction</span>
                        <span class="cv-value">${prediction}</span>
                    </div>
                    ${edgeDensity !== null
                ? `
                    <div class="cv-result-item">
                        <span class="cv-label">Edge Density</span>
                        <span class="cv-value">${edgeDensity}%</span>
                    </div>` : ''
            }
                </div>

                ${suggestions.length
                ? `
                <div class="cv-divider"></div>
                <div class="cv-result-suggestions">
                    <span class="cv-label">You Must :</span>
                    <ul class="cv-suggestions-list">
                        ${suggestions.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                ` : ''
            }
            `;



        if (resultBox) {
            resultBox.innerHTML = html;
        }

    } catch (error) {
        console.error('CrowdVision error:', error);
        if (resultBox) {
            resultBox.innerHTML = "⚠️ Analysis failed: " + error.message;
        }
    } finally {
        uploadButton.disabled = false;
        uploadButton.textContent = t('cv_button_analyze');
        uploadedFiles = [];
        renderFileList();
    }
}




// Drag-and-Drop Handlers
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight(e) {
    dropArea.classList.add('drop-area:hover');
}

function unhighlight(e) {
    dropArea.classList.remove('drop-area:hover');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}


// --- EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', function () {

    // Load state
    loadTheme();
    loadLanguage();
    initializeMap();

    // Map Slider
    slider.addEventListener('input', handleSliderChange);
    slider.addEventListener("change", async () => {
        const city = "Pekanbaru"; // TODO: nanti bisa dinamis dari kota yang di-klik
        const sliderValue = parseInt(slider.value, 10);
        const hours = SLIDER_TO_HOURS[sliderValue] ?? 0; // 0–24 jam

        const prediction = await getFuturePrediction(city, hours);
        if (prediction !== null) {
            document.getElementById("metric-predicted-aqi").textContent = prediction.toFixed(2);
        }
    });


    updatePredictionUI(TIME_PERIODS[slider.value]);

    // Modals
    modalCloseBtn.addEventListener('click', hideMessage);

    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Navigation
    dropdownToggle.addEventListener('click', toggleDropdown);
    languageToggle.addEventListener('click', toggleLanguageDropdown);
    document.querySelectorAll('.nav-link-dropdown').forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    document.addEventListener('click', function (event) {
        const isClickOnToggle = dropdownToggle.contains(event.target);
        const isClickOnMenu = headerDropdownMenu.contains(event.target);
        const isClickOnLangToggle = languageToggle.contains(event.target);
        const isClickOnLangMenu = languageDropdownMenu.contains(event.target);

        if (headerDropdownMenu.classList.contains('is-open') && !isClickOnToggle && !isClickOnMenu) {
            headerDropdownMenu.classList.remove('is-open');
            dropdownIcon.classList.remove('rotate-180');
            dropdownToggle.classList.remove('is-open');
        }

        if (languageDropdownMenu.classList.contains('is-open') && !isClickOnLangToggle && !isClickOnLangMenu) {
            languageDropdownMenu.classList.remove('is-open');
        }
    });

    languageDropdownMenu.querySelectorAll('a[data-lang]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const langCode = this.getAttribute('data-lang');
            setLanguage(langCode);
        });
    });

    // File Uploader
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });
    dropArea.addEventListener('drop', handleDrop, false);
    fileElem.addEventListener('change', function (e) {
        handleFiles(e.target.files);
    });
    uploadButton.addEventListener('click', uploadFile);
});



