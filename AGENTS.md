# AGENTS.md (개발/운영 가이드)

이 문서는 개발/운영 작업자를 위한 규칙과 절차를 모아둔 가이드입니다.
사용자용 설명서는 `README.md`를 참고합니다.

## 작업 규칙 (Git)

- 기본 브랜치: `main`
- 커밋 메시지 예시: `docs: update post guide`, `fix: print details expand`
- 푸시 전 `git status -sb`로 변경 파일 확인

## 로컬 미리보기

`fetch()` 사용으로 인해 로컬 서버가 필요합니다.

```bash
python3 -m http.server 4173 --directory .
```

브라우저에서 `http://localhost:4173/` 접속.

## 포스트 작성 구조

- 포스트 마크다운: `posts/*.md`
- 인덱스: `posts.json`

`posts.json` 필드 요약:
- `slug`: 파일명에서 `.md`를 뺀 값과 동일
- `title`: 목록/상세 제목
- `date`: `YYYY-MM-DD` 형식
- `tags`: 검색/필터에 사용
- `summary`: 목록 카드 요약
- `links`: 상세 하단 Related Links 섹션에 표시

## 링크/Related Links

- 본문 링크: 마크다운 기본 문법 사용
- 포스트 간 링크: `?post=slug`
- Related Links: `posts.json`의 `links` 배열을 사용

## 인쇄 동작 (Details 자동 펼침)

`details` 토글이 닫힌 상태에서도 인쇄 시 모두 펼쳐지도록 처리됨.
- 구현 위치: `index.html`의 `beforeprint/afterprint` 이벤트 처리 로직

## 배포 (GitHub Pages)

1. GitHub에 푸시
2. 저장소 Settings → Pages
3. Source: `main` / `(root)`
4. 배포 URL 확인
