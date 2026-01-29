export const translations = {
    ko: {
        siteTitle: "AI비즈솔루션팀 블로그",
        searchPlaceholder: "제목 또는 태그로 검색하세요...",
        home: "홈",
        backToList: "← 목록으로 돌아가기",
        loading: "로딩 중...",
        contents: "목차",
        noPosts: "포스트가 없습니다.",
        activeTag: "선택된 태그:",
        clickToClear: "(클릭하여 해제)",
        copyright: "© 2026 인크로스 AI비즈솔루션팀. All rights reserved.",
        githubRepo: "GitHub 저장소",
        postNotFound: "포스트를 찾을 수 없습니다. 목록으로 돌아가주세요.",
        wideView: "↔ 넓게 보기",
        relatedLinks: "🔗 관련 자료"
    },
    en: {
        siteTitle: "AI Biz Solution Team Blog",
        searchPlaceholder: "Search posts by title or tags...",
        home: "HOME",
        backToList: "← Back to list",
        loading: "Loading...",
        contents: "Contents",
        noPosts: "No posts found.",
        activeTag: "Active tag:",
        clickToClear: "(click again to clear)",
        copyright: "© 2026 Incross AI Biz Solution Team. All rights reserved.",
        githubRepo: "GitHub Repo",
        postNotFound: "Post not found. Please go back to the list.",
        wideView: "↔ Wide View",
        relatedLinks: "🔗 Related Links"
    }
};

export const getCurrentLang = () => {
    return localStorage.getItem('blog-lang') || 'ko';
};

export const setLanguage = (lang) => {
    localStorage.setItem('blog-lang', lang);
    window.dispatchEvent(new CustomEvent('language-changed', { detail: { lang } }));
};
