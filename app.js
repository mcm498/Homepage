// --- 서울시 25개 자치구 데이터셋 ---
const districtData = [
  {
    id: "jongno",
    name: "종로구",
    engName: "Jongno-gu",
    slogan: "역사와 문화가 살아 숨쉬는 종로",
    url: "https://www.jongno.go.kr",
    minwonUrl: "https://www.jongno.go.kr/portal/main.do",
    phone: "02-2148-1114",
    address: "서울특별시 종로구 삼봉로 43",
    region: "central",
    lat: 37.5730,
    lng: 126.9794
  },
  {
    id: "junggu",
    name: "중구",
    engName: "Jung-gu",
    slogan: "시민의 힘으로, 하나되는 서울 중구",
    url: "https://www.junggu.seoul.kr",
    minwonUrl: "https://www.junggu.seoul.kr/index.jsp",
    phone: "02-3396-4114",
    address: "서울특별시 중구 창경궁로 17",
    region: "central",
    lat: 37.5638,
    lng: 126.9976
  },
  {
    id: "yongsan",
    name: "용산구",
    engName: "Yongsan-gu",
    slogan: "미래를 여는 용산",
    url: "https://www.yongsan.go.kr",
    minwonUrl: "https://www.yongsan.go.kr/portal/main.do",
    phone: "02-2199-6114",
    address: "서울특별시 용산구 녹사평대로 150",
    region: "central",
    lat: 37.5325,
    lng: 126.9904
  },
  {
    id: "seongdong",
    name: "성동구",
    engName: "Seongdong-gu",
    slogan: "스마트 포용도시 성동",
    url: "https://www.sd.go.kr",
    minwonUrl: "https://www.sd.go.kr/main/index.do",
    phone: "02-2286-5114",
    address: "서울특별시 성동구 고산자로 270",
    region: "east",
    lat: 37.5634,
    lng: 127.0369
  },
  {
    id: "gwangjin",
    name: "광진구",
    engName: "Gwangjin-gu",
    slogan: "소통하며 발전하는 행복광진",
    url: "https://www.gwangjin.go.kr",
    minwonUrl: "https://www.gwangjin.go.kr/portal/main.do",
    phone: "02-450-1114",
    address: "서울특별시 광진구 자양로 117",
    region: "east",
    lat: 37.5385,
    lng: 127.0824
  },
  {
    id: "dongdaemun",
    name: "동대문구",
    engName: "Dongdaemun-gu",
    slogan: "쾌적하고 안전한 동대문",
    url: "https://www.ddm.go.kr",
    minwonUrl: "https://www.ddm.go.kr/main.do",
    phone: "02-2127-4114",
    address: "서울특별시 동대문구 천호대로 145",
    region: "east",
    lat: 37.5744,
    lng: 127.0397
  },
  {
    id: "jungnang",
    name: "중랑구",
    engName: "Jungnang-gu",
    slogan: "행복한 미래, 새로운 중랑",
    url: "https://www.jungnang.go.kr",
    minwonUrl: "https://www.jungnang.go.kr/portal/main.do",
    phone: "02-2094-0114",
    address: "서울특별시 중랑구 봉화산로 179",
    region: "east",
    lat: 37.6063,
    lng: 127.0926
  },
  {
    id: "seongbuk",
    name: "성북구",
    engName: "Seongbuk-gu",
    slogan: "풍요롭고 정의로운 성북",
    url: "https://www.sb.go.kr",
    minwonUrl: "https://www.sb.go.kr/main/main.do",
    phone: "02-2241-3114",
    address: "서울특별시 성북구 보문로 168",
    region: "north",
    lat: 37.5894,
    lng: 127.0167
  },
  {
    id: "gangbuk",
    name: "강북구",
    engName: "Gangbuk-gu",
    slogan: "희망강북, 함께하는 강북",
    url: "https://www.gangbuk.go.kr",
    minwonUrl: "https://www.gangbuk.go.kr/portal/main.do",
    phone: "02-901-6114",
    address: "서울특별시 강북구 도봉로89길 13",
    region: "north",
    lat: 37.6398,
    lng: 127.0255
  },
  {
    id: "dobong",
    name: "도봉구",
    engName: "Dobong-gu",
    slogan: "함께 만드는 행복한 도봉",
    url: "https://www.dobong.go.kr",
    minwonUrl: "https://www.dobong.go.kr/index.asp",
    phone: "02-2091-2120",
    address: "서울특별시 도봉구 마들로 656",
    region: "north",
    lat: 37.6688,
    lng: 127.0471
  },
  {
    id: "nowon",
    name: "노원구",
    engName: "Nowon-gu",
    slogan: "내일이 기대되는 노원",
    url: "https://www.nowon.kr",
    minwonUrl: "https://www.nowon.kr/kr/index.xx",
    phone: "02-2116-3114",
    address: "서울특별시 노원구 노해로 437",
    region: "north",
    lat: 37.6542,
    lng: 127.0565
  },
  {
    id: "eunpyeong",
    name: "은평구",
    engName: "Eunpyeong-gu",
    slogan: "구민과 함께하는 은평",
    url: "https://www.ep.go.kr",
    minwonUrl: "https://www.ep.go.kr/portal/main.do",
    phone: "02-351-6114",
    address: "서울특별시 은평구 은평로 195",
    region: "west",
    lat: 37.6027,
    lng: 126.9291
  },
  {
    id: "seodaemun",
    name: "서대문구",
    engName: "Seodaemun-gu",
    slogan: "행복 100% 서대문",
    url: "https://www.sdm.go.kr",
    minwonUrl: "https://www.sdm.go.kr/index.do",
    phone: "02-330-1114",
    address: "서울특별시 서대문구 연희로 248",
    region: "west",
    lat: 37.5791,
    lng: 126.9368
  },
  {
    id: "mapo",
    name: "마포구",
    engName: "Mapo-gu",
    slogan: "새로운 마포, 더 나은 마포",
    url: "https://www.mapo.go.kr",
    minwonUrl: "https://www.mapo.go.kr/site/main/home",
    phone: "02-3153-8114",
    address: "서울특별시 마포구 월드컵로 212",
    region: "west",
    lat: 37.5663,
    lng: 126.9015
  },
  {
    id: "gangseo",
    name: "강서구",
    engName: "Gangseo-gu",
    slogan: "조화로운 성장, 삶이 아름다운 강서",
    url: "https://www.gangseo.seoul.kr",
    minwonUrl: "https://www.gangseo.seoul.kr/index",
    phone: "02-2600-6114",
    address: "서울특별시 강서구 화곡로 302",
    region: "west",
    lat: 37.5509,
    lng: 126.8497
  },
  {
    id: "yangcheon",
    name: "양천구",
    engName: "Yangcheon-gu",
    slogan: "살기 좋은 양천",
    url: "https://www.yangcheon.go.kr",
    minwonUrl: "https://www.yangcheon.go.kr/site/yangcheon/main.do",
    phone: "02-2620-3114",
    address: "서울특별시 양천구 목동동로 105",
    region: "west",
    lat: 37.5169,
    lng: 126.8665
  },
  {
    id: "yeongdeungpo",
    name: "영등포구",
    engName: "Yeongdeungpo-gu",
    slogan: "행복 중심, 영등포",
    url: "https://www.ydp.go.kr",
    minwonUrl: "https://www.ydp.go.kr/main/main.do",
    phone: "02-2670-3114",
    address: "서울특별시 영등포구 당산로 123",
    region: "west",
    lat: 37.5263,
    lng: 126.8962
  },
  {
    id: "guro",
    name: "구로구",
    engName: "Guro-gu",
    slogan: "따뜻한 동행, 변화하는 구로",
    url: "https://www.guro.go.kr",
    minwonUrl: "https://www.guro.go.kr/guro/main.do",
    phone: "02-860-2114",
    address: "서울특별시 구로구 가마산로 245",
    region: "west",
    lat: 37.4954,
    lng: 126.8875
  },
  {
    id: "geumcheon",
    name: "금천구",
    engName: "Geumcheon-gu",
    slogan: "살기 좋은 금천",
    url: "https://www.geumcheon.go.kr",
    minwonUrl: "https://www.geumcheon.go.kr/portal/main.do",
    phone: "02-2627-2114",
    address: "서울특별시 금천구 시흥대로73길 70",
    region: "west",
    lat: 37.4568,
    lng: 126.8954
  },
  {
    id: "dongjak",
    name: "동작구",
    engName: "Dongjak-gu",
    slogan: "일하는 동작, 행복한 구민",
    url: "https://www.dongjak.go.kr",
    minwonUrl: "https://www.dongjak.go.kr/portal/main.do",
    phone: "02-820-1114",
    address: "서울특별시 동작구 장승배기로 161",
    region: "south",
    lat: 37.5124,
    lng: 126.9392
  },
  {
    id: "gwanak",
    name: "관악구",
    engName: "Gwanak-gu",
    slogan: "청년 친화 도시, 더불어 관악",
    url: "https://www.gwanak.go.kr",
    minwonUrl: "https://www.gwanak.go.kr/site/gwanak/main.do",
    phone: "02-879-5000",
    address: "서울특별시 관악구 관악로 145",
    region: "south",
    lat: 37.4784,
    lng: 126.9515
  },
  {
    id: "seocho",
    name: "서초구",
    engName: "Seocho-gu",
    slogan: "오늘보다 내일이 더 기대되는 서초",
    url: "https://www.seocho.go.kr",
    minwonUrl: "https://www.seocho.go.kr/site/seocho/main.do",
    phone: "02-2155-6114",
    address: "서울특별시 서초구 남부순환로 2584",
    region: "south",
    lat: 37.4836,
    lng: 127.0327
  },
  {
    id: "gangnam",
    name: "강남구",
    engName: "Gangnam-gu",
    slogan: "꿈이 실현되는 나라, 강남",
    url: "https://www.gangnam.go.kr",
    minwonUrl: "https://www.gangnam.go.kr/office/main.do",
    phone: "02-3423-5114",
    address: "서울특별시 강남구 학동로 426",
    region: "south",
    lat: 37.5172,
    lng: 127.0473
  },
  {
    id: "songpa",
    name: "송파구",
    engName: "Songpa-gu",
    slogan: "구민을 향한 동행, 송파",
    url: "https://www.songpa.go.kr",
    minwonUrl: "https://www.songpa.go.kr/user/main.do",
    phone: "02-2147-2000",
    address: "서울특별시 송파구 올림픽로 326",
    region: "east",
    lat: 37.5145,
    lng: 127.1059
  },
  {
    id: "gangdong",
    name: "강동구",
    engName: "Gangdong-gu",
    slogan: "더불어 행복한 강동",
    url: "https://www.gangdong.go.kr",
    minwonUrl: "https://www.gangdong.go.kr/web/portal/ko.do",
    phone: "02-3425-5114",
    address: "서울특별시 강동구 성내로 25",
    region: "east",
    lat: 37.5301,
    lng: 127.1238
  }
];

// --- 애플리케이션 상태 관리 ---
const state = {
  selectedId: "jongno",
  pinnedIds: JSON.parse(localStorage.getItem("pinned_districts") || "[]"),
  searchQuery: "",
  activeRegion: "all",
  sortBy: "name", // name, distance
  userCoords: null, // { lat, lng }
  closestId: null
};

// 권역 이름 한글 맵핑
const regionLabels = {
  central: "중부",
  east: "동부",
  west: "서부",
  north: "북부",
  south: "남부"
};

// --- DOM 요소 참조 ---
const cartogramGrid = document.getElementById("cartogramGrid");
const searchInput = document.getElementById("searchInput");
const filterTags = document.getElementById("filterTags");
const sortSelect = document.getElementById("sortSelect");
const districtList = document.getElementById("districtList");
const favoritesList = document.getElementById("favoritesList");
const profilePanel = document.getElementById("profilePanel");
const proximityBtn = document.getElementById("proximityBtn");
const themeToggle = document.getElementById("themeToggle");
const toast = document.getElementById("toast");

// --- 하버사인(Haversine) 공식을 활용한 거리 계산 함수 ---
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // 지구 반지름 (km)
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // km 반환
}

// --- 토스트 메시지 함수 ---
function showToast(message) {
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// --- 클립보드 복사 함수 ---
window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label}이(가) 클립보드에 복사되었습니다!`);
  }).catch(err => {
    console.error("복사 실패:", err);
  });
};

// --- 즐겨찾기 토글 함수 ---
window.togglePin = function(id, event) {
  if (event) event.stopPropagation();
  const index = state.pinnedIds.indexOf(id);
  if (index === -1) {
    state.pinnedIds.push(id);
    showToast(`${getDistrictById(id).name}가 북마크에 등록되었습니다.`);
  } else {
    state.pinnedIds.splice(index, 1);
    showToast(`${getDistrictById(id).name}가 북마크에서 해제되었습니다.`);
  }
  localStorage.setItem("pinned_districts", JSON.stringify(state.pinnedIds));
  renderApp();
};

// --- 구청 ID 기준 단일 조회 ---
function getDistrictById(id) {
  return districtData.find(d => d.id === id);
}

// --- 초성 검색을 지원하는 정규식 변환기 ---
function getChosungRegex(search) {
  const chosungs = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
  let regexStr = "";
  
  for (let i = 0; i < search.length; i++) {
    const char = search[i];
    const chosungIndex = chosungs.indexOf(char);
    if (chosungIndex !== -1) {
      const startCode = 0xac00 + chosungIndex * 588;
      const endCode = startCode + 587;
      regexStr += `[\\u${startCode.toString(16)}-\\u${endCode.toString(16)}]`;
    } else {
      regexStr += char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  }
  return new RegExp(regexStr, 'i');
}

// --- 실시간 검색 및 필터 가공 데이터 생성 ---
function getFilteredDistricts() {
  let result = districtData.map(item => {
    let distance = null;
    if (state.userCoords) {
      distance = calculateDistance(
        state.userCoords.lat,
        state.userCoords.lng,
        item.lat,
        item.lng
      );
    }
    return { ...item, distance };
  });

  // 1. 검색 필터
  if (state.searchQuery.trim() !== "") {
    const searchVal = state.searchQuery.trim();
    // 초성 매칭 정규식 생성
    const regex = getChosungRegex(searchVal);
    
    result = result.filter(item => {
      return (
        regex.test(item.name) ||
        item.engName.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.slogan.includes(searchVal)
      );
    });
  }

  // 2. 권역 필터
  if (state.activeRegion !== "all") {
    result = result.filter(item => item.region === state.activeRegion);
  }

  // 3. 정렬 적용
  if (state.sortBy === "distance" && state.userCoords) {
    result.sort((a, b) => a.distance - b.distance);
  } else {
    // 기본값: 가나다 한글 이름순
    result.sort((a, b) => a.name.localeCompare(b.name, "ko"));
  }

  return result;
}

// --- 테마 설정 토글 ---
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.innerHTML = "🌙";
  } else if (savedTheme === "dark" || systemPrefersDark) {
    document.body.classList.remove("light-theme");
    themeToggle.innerHTML = "☀️";
  } else {
    document.body.classList.remove("light-theme");
    themeToggle.innerHTML = "☀️";
  }
}

themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-theme");
  themeToggle.innerHTML = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// --- 사용자 위치 정보 불러오기 ---
proximityBtn.addEventListener("click", () => {
  if (proximityBtn.classList.contains("loading")) return;

  proximityBtn.classList.add("loading");
  proximityBtn.innerHTML = `<span>⏳</span> 위치 확인 중...`;

  if (!navigator.geolocation) {
    showToast("브라우저가 위치 정보를 지원하지 않습니다.");
    proximityBtn.classList.remove("loading");
    proximityBtn.innerHTML = `<span>📍</span> 내 주변 구청 찾기`;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.userCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      // 가장 가까운 구청 계산
      let minDistance = Infinity;
      let closestId = null;
      
      districtData.forEach(item => {
        const dist = calculateDistance(
          state.userCoords.lat,
          state.userCoords.lng,
          item.lat,
          item.lng
        );
        if (dist < minDistance) {
          minDistance = dist;
          closestId = item.id;
        }
      });

      state.closestId = closestId;
      state.selectedId = closestId; // 자동으로 인접한 구청 프로필 활성화
      
      // 거리 정렬 활성화
      state.sortBy = "distance";
      sortSelect.value = "distance";
      
      proximityBtn.classList.remove("loading");
      proximityBtn.innerHTML = `<span>📍</span> 위치 수집 완료`;
      proximityBtn.style.background = "linear-gradient(135deg, var(--accent-emerald), var(--accent-blue))";
      
      showToast(`가장 가까운 구청은 [${getDistrictById(closestId).name}] 입니다.`);
      renderApp();
    },
    (error) => {
      console.error(error);
      let errMsg = "위치 정보를 가져올 수 없습니다.";
      if (error.code === error.PERMISSION_DENIED) {
        errMsg = "위치 정보 접근 권한이 거부되었습니다.";
      }
      showToast(errMsg);
      
      // 실패 시 서울시청 기준으로 세팅
      state.userCoords = {
        lat: 37.5598,
        lng: 126.9734
      };
      state.sortBy = "distance";
      sortSelect.value = "distance";
      
      proximityBtn.classList.remove("loading");
      proximityBtn.innerHTML = `<span>📍</span> 서울시청 기준 찾기`;
      renderApp();
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
});

// --- 검색 인풋 리스너 ---
searchInput.addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  renderApp();
});

// --- 정렬 선택 리스너 ---
sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  renderApp();
});

// --- 카토그램 격자 셀 생성 및 이벤트 부착 ---
function initCartogram() {
  districtData.forEach(item => {
    const cell = document.createElement("div");
    cell.className = `map-cell cell-${item.id}`;
    cell.id = `cell-${item.id}`;
    cell.setAttribute("data-region", item.region);
    cell.innerHTML = `
      <span>${item.name.replace("구", "")}</span>
    `;
    cell.addEventListener("click", () => {
      selectDistrict(item.id);
    });
    cartogramGrid.appendChild(cell);
  });
}

// --- 특정 구청 선택 처리 ---
function selectDistrict(id) {
  state.selectedId = id;
  // 선택한 구청 카드가 있는 리스트 항목으로 스크롤 이동
  const cardElement = document.getElementById(`card-${id}`);
  if (cardElement) {
    cardElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  renderApp();
}

// --- 화면 렌더링 동적 업데이트 ---
function renderApp() {
  const filtered = getFilteredDistricts();
  
  // 1. 카토그램 격자 맵 업데이트
  districtData.forEach(item => {
    const cell = document.getElementById(`cell-${item.id}`);
    if (cell) {
      cell.classList.toggle("active", item.id === state.selectedId);
      cell.classList.toggle("closest", item.id === state.closestId);
    }
  });

  // 2. 권역 필터 태그 렌더링
  renderFilterTags();

  // 3. 구청 목록 렌더링
  renderDistrictList(filtered);

  // 4. 북마크 목록 렌더링
  renderFavorites();

  // 5. 프로필 상세 패널 렌더링
  renderProfile();
}

// --- 권역 태그 렌더링 ---
function renderFilterTags() {
  const regions = ["all", "central", "east", "west", "north", "south"];
  filterTags.innerHTML = "";
  
  regions.forEach(reg => {
    const btn = document.createElement("button");
    btn.className = `filter-tag ${state.activeRegion === reg ? "active" : ""}`;
    btn.innerText = reg === "all" ? "전체 권역" : `${regionLabels[reg]}부`;
    btn.addEventListener("click", () => {
      state.activeRegion = reg;
      renderApp();
    });
    filterTags.appendChild(btn);
  });
}

// --- 구청 리스트 렌더링 ---
function renderDistrictList(list) {
  districtList.innerHTML = "";
  
  if (list.length === 0) {
    districtList.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 3rem 0;">
        검색 결과에 맞는 구청이 없습니다.
      </div>
    `;
    return;
  }

  list.forEach(item => {
    const isPinned = state.pinnedIds.includes(item.id);
    const isActive = item.id === state.selectedId;
    const card = document.createElement("div");
    
    card.id = `card-${item.id}`;
    card.className = `district-card ${isActive ? "active" : ""}`;
    card.addEventListener("click", () => {
      selectDistrict(item.id);
    });

    const distanceHtml = item.distance !== null 
      ? `<span class="card-distance">📍 ${item.distance.toFixed(1)} km</span>` 
      : `<span style="color: var(--text-muted)">위치 미지정</span>`;

    card.innerHTML = `
      <div class="card-header-row">
        <div class="card-title">${item.name}</div>
        <button class="pin-btn ${isPinned ? "pinned" : ""}" onclick="togglePin('${item.id}', event)">★</button>
      </div>
      <div class="card-slogan">${item.slogan}</div>
      <div class="card-meta">
        <span class="region-badge" style="color: var(--accent-${item.region === 'central' ? 'amber' : item.region === 'east' ? 'blue' : item.region === 'west' ? 'emerald' : item.region === 'north' ? 'cyan' : 'rose'}); font-weight: 600;">
          ${regionLabels[item.region]}부
        </span>
        ${distanceHtml}
      </div>
    `;
    districtList.appendChild(card);
  });
}

// --- 즐겨찾기 리스트 렌더링 ---
function renderFavorites() {
  favoritesList.innerHTML = "";
  
  state.pinnedIds.forEach(id => {
    const item = getDistrictById(id);
    if (!item) return;

    const favCard = document.createElement("div");
    favCard.className = "favorite-card";
    favCard.addEventListener("click", () => {
      selectDistrict(item.id);
    });

    // 즐겨찾기 태그별 색상
    const regColor = item.region === 'central' ? 'amber' : item.region === 'east' ? 'blue' : item.region === 'west' ? 'emerald' : item.region === 'north' ? 'cyan' : 'rose';

    favCard.innerHTML = `
      <div class="fav-info">
        <span class="fav-name">${item.name}</span>
        <span class="fav-region" style="background: rgba(var(--accent-${regColor}), 0.1); color: var(--accent-${regColor}); border: 1px solid rgba(var(--accent-${regColor}), 0.2)">
          ${regionLabels[item.region]}부
        </span>
      </div>
      <button class="pin-btn pinned" onclick="togglePin('${item.id}', event)">★</button>
    `;
    favoritesList.appendChild(favCard);
  });
}

// --- 프로필 영역 상세정보 렌더링 ---
function renderProfile() {
  const item = getDistrictById(state.selectedId);
  if (!item) return;

  const isPinned = state.pinnedIds.includes(item.id);
  const distanceInfo = state.userCoords 
    ? calculateDistance(state.userCoords.lat, state.userCoords.lng, item.lat, item.lng).toFixed(2) + " km"
    : "위치 정보 수집 전";

  profilePanel.innerHTML = `
    <div class="profile-header">
      <div class="profile-title-group">
        <h2>${item.name} </h2>
        <span>${item.engName}</span>
      </div>
      <button class="pin-btn ${isPinned ? "pinned" : ""}" onclick="togglePin('${item.id}', event)" style="font-size: 1.5rem;">★</button>
    </div>
    
    <div class="profile-slogan">
      " ${item.slogan} "
    </div>
    
    <div class="profile-details-grid">
      <div class="detail-item">
        <span class="detail-label">🏢 도로명 주소</span>
        <div class="detail-value">
          <span>${item.address}</span>
          <button class="copy-btn" onclick="copyToClipboard('${item.address}', '도로명 주소')">복사</button>
        </div>
      </div>
      
      <div class="detail-item">
        <span class="detail-label">📞 대표 전화번호</span>
        <div class="detail-value">
          <span>${item.phone}</span>
          <button class="copy-btn" onclick="copyToClipboard('${item.phone}', '대표 전화번호')">복사</button>
        </div>
      </div>
      
      <div class="detail-item">
        <span class="detail-label">🧭 권역 및 지리위치</span>
        <span class="detail-value" style="color: var(--accent-cyan)">
          ${regionLabels[item.region]}부 / 직선거리: ${distanceInfo}
        </span>
      </div>
    </div>
    
    <div class="profile-actions">
      <a href="${item.url}" target="_blank" class="action-link-btn primary">
        <span>🌐</span> 구청 공식 홈페이지
      </a>
      <a href="${item.minwonUrl}" target="_blank" class="action-link-btn secondary">
        <span>📄</span> 민원 포털 서비스
      </a>
    </div>
  `;
}

// --- 앱 초기화 실행 ---
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCartogram();
  renderApp();
});
