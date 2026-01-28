# Neobrutalism Blog (네오 브루탈리즘 블로그)

순수 HTML, CSS, JavaScript로 구축된 정적 블로그입니다. 포스트는 마크다운 파일로 저장되며, `posts.json` 메타데이터 파일을 통해 인덱싱됩니다.

## 주요 기능

- **네오 브루탈리즘 디자인**: 굵은 테두리와 강렬한 그림자, 고대비 UI 적용
- **검색 및 필터**: 제목 검색 및 태그 필터링 기능
- **클라이언트 사이드 렌더링**: `marked.js`(CDN)를 사용하여 브라우저에서 마크다운 변환
- **GitHub Pages 최적화**: 별도의 빌드 과정 없는 순수 정적 구조

## 로컬에서 미리보기 (Local Preview)

`fetch()` API를 사용하므로, CORS 문제를 피하기 위해 로컬 서버가 필요합니다:

```bash
npx http-server .
```

터미널에 표시되는 URL(보통 `http://127.0.0.1:8080`)을 브라우저에서 열어주세요.

## 새 포스트 작성 방법 (How to Add a Post)

1.  **마크다운 파일 생성**: `posts/` 폴더에 새로운 `.md` 파일을 만듭니다 (예: `posts/my-story.md`).
2.  **인덱스 업데이트**: `posts.json` 파일을 열고 새 포스트 정보를 추가합니다:

    ```json
    {
      "slug": "my-story", // .md 확장자를 뺀 파일명과 똑같아야 합니다
      "title": "나의 새로운 이야기",
      "date": "2026-01-29",
      "tags": ["life", "update"],
      "summary": "새 포스트의 요약 내용입니다."
    }
    ```

## GitHub Pages 배포

저장소: `https://github.com/aibizsolution/blog`

1. GitHub 저장소에 코드를 푸시합니다.
2. 저장소의 **Settings** > **Pages** 메뉴로 이동합니다.
3. **Source**를 `main` 브랜치, 폴더를 `/ (root)`로 설정하고 저장합니다.
4. 배포가 완료될 때까지 잠시 기다립니다.

라이브 데모:

`https://aibizsolution.github.io/blog/`
