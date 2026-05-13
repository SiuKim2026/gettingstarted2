import { useMemo, useState } from 'react'
import './App.css'

type Lesson = {
  tag: string
  title: string
  summary: string
  points: string[]
}

type FlowStep = {
  step: string
  title: string
  body: string
}

const lessons: Lesson[] = [
  {
    tag: 'Web App',
    title: '웹 앱은 작은 화면들의 조합입니다',
    summary:
      '버튼, 입력창, 카드, 목록처럼 사용자가 만지는 조각들을 연결해 하나의 학습 경험을 만듭니다.',
    points: ['HTML은 구조', 'CSS는 표현', 'JavaScript는 상호작용'],
  },
  {
    tag: 'React',
    title: 'React는 화면을 컴포넌트로 나눕니다',
    summary:
      '반복되는 UI를 컴포넌트로 만들면 수업 자료, 과제 목록, 진행 상태처럼 비슷한 화면을 쉽게 재사용할 수 있습니다.',
    points: ['컴포넌트', 'props', 'state'],
  },
  {
    tag: 'TypeScript',
    title: 'TypeScript는 데이터의 모양을 알려줍니다',
    summary:
      '학습 카드나 체크리스트 항목의 타입을 미리 정하면 실수를 줄이고 코드를 더 자신 있게 수정할 수 있습니다.',
    points: ['type 정의', '자동완성', '오류 예방'],
  },
  {
    tag: 'GitHub',
    title: 'GitHub는 작업 기록을 보관합니다',
    summary:
      '코드를 올리고 변경 이력을 남기면 다른 컴퓨터에서도 이어서 작업하고, 배포 서비스와 연결할 수 있습니다.',
    points: ['commit', 'push', 'repository'],
  },
]

const flowSteps: FlowStep[] = [
  {
    step: '01',
    title: '아이디어 정리',
    body: '누가 사용할지, 첫 화면에서 무엇을 할 수 있어야 하는지 한 문장으로 적습니다.',
  },
  {
    step: '02',
    title: 'Vite 프로젝트 실행',
    body: 'npm run dev로 개발 서버를 켜고 브라우저에서 결과를 바로 확인합니다.',
  },
  {
    step: '03',
    title: 'React 컴포넌트 작성',
    body: '학습 카드, 흐름 안내, 체크리스트처럼 의미 있는 단위로 화면을 나눕니다.',
  },
  {
    step: '04',
    title: 'TypeScript로 정리',
    body: '콘텐츠 데이터의 타입을 정의해 수정할 때 놓치기 쉬운 부분을 에디터가 알려주게 합니다.',
  },
  {
    step: '05',
    title: 'GitHub에 올리기',
    body: '변경 내용을 commit하고 GitHub 저장소로 push해 배포 준비를 마칩니다.',
  },
  {
    step: '06',
    title: 'Vercel 배포',
    body: 'Vercel에서 GitHub 저장소를 선택하면 build 결과가 공개 URL로 배포됩니다.',
  },
]

const checklistItems = [
  '개발 서버를 실행하고 화면 확인하기',
  '학습 카드 컴포넌트 구조 이해하기',
  'useState로 체크리스트 상태 바꾸기',
  'npm run build로 배포용 파일 만들기',
  'GitHub에 commit과 push 해보기',
  'Vercel에서 저장소 연결하고 배포하기',
]

function App() {
  const [completed, setCompleted] = useState<string[]>([])

  const progress = useMemo(
    () => Math.round((completed.length / checklistItems.length) * 100),
    [completed.length],
  )

  const toggleItem = (item: string) => {
    setCompleted((current) =>
      current.includes(item)
        ? current.filter((completedItem) => completedItem !== item)
        : [...current, item],
    )
  }

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="eyebrow">교육대학원생을 위한 웹 앱 개발 입문</p>
          <h1 id="hero-title">처음 만드는 웹 앱, 배포까지 한 흐름으로 배웁니다</h1>
          <p className="hero__lead">
            React와 TypeScript의 기본 개념을 학습 카드로 익히고, GitHub에서
            Vercel 배포까지 이어지는 실제 개발 흐름을 단계별로 확인하세요.
          </p>
          <div className="hero__actions" aria-label="주요 학습 영역">
            <a href="#lessons">학습 카드 보기</a>
            <a href="#checklist">체크리스트 시작</a>
          </div>
        </div>
        <div className="hero__panel" aria-label="현재 학습 진행률">
          <span>오늘의 목표</span>
          <strong>{progress}%</strong>
          <p>체크리스트를 완료하며 개발부터 배포까지의 큰 그림을 잡아보세요.</p>
          <div className="progress" aria-hidden="true">
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>
      </section>

      <section className="section" id="lessons" aria-labelledby="lessons-title">
        <div className="section__heading">
          <p className="eyebrow">Core Lessons</p>
          <h2 id="lessons-title">핵심 개념 카드</h2>
          <p>처음 배울 때 헷갈리기 쉬운 개념을 수업 자료처럼 짧게 정리했습니다.</p>
        </div>
        <div className="lesson-grid">
          {lessons.map((lesson) => (
            <article className="lesson-card" key={lesson.title}>
              <span>{lesson.tag}</span>
              <h3>{lesson.title}</h3>
              <p>{lesson.summary}</p>
              <ul>
                {lesson.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section flow-section" aria-labelledby="flow-title">
        <div className="section__heading">
          <p className="eyebrow">Development Flow</p>
          <h2 id="flow-title">개발에서 배포까지</h2>
          <p>아이디어를 코드로 만들고, GitHub를 거쳐 Vercel에 공개하는 순서입니다.</p>
        </div>
        <div className="flow-list">
          {flowSteps.map((item) => (
            <article className="flow-item" key={item.step}>
              <div>{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section checklist-section" id="checklist" aria-labelledby="checklist-title">
        <div className="section__heading">
          <p className="eyebrow">Practice Checklist</p>
          <h2 id="checklist-title">실습 체크리스트</h2>
          <p>완료한 항목을 누르며 나만의 학습 진행 상태를 확인해보세요.</p>
        </div>
        <div className="checklist-layout">
          <div className="checklist">
            {checklistItems.map((item) => {
              const isChecked = completed.includes(item)

              return (
                <label className="check-item" key={item}>
                  <input
                    checked={isChecked}
                    onChange={() => toggleItem(item)}
                    type="checkbox"
                  />
                  <span aria-hidden="true">{isChecked ? '✓' : ''}</span>
                  <p>{item}</p>
                </label>
              )
            })}
          </div>
          <aside className="tip-box" aria-label="초보자를 위한 팁">
            <h3>처음에는 이것만 기억하세요</h3>
            <p>
              웹 앱 개발은 한 번에 완성하는 일이 아니라, 작게 만들고 실행하고
              고치는 과정을 반복하는 일입니다.
            </p>
            <code>npm run dev</code>
            <code>npm run build</code>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
