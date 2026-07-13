import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactDock } from "@/components/layout/contact-dock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { curriculumStages, examTracks } from "./data";

export const metadata: Metadata = buildPageMetadata({
  title: "Lộ trình học Chuyên Tin từ nền tảng đến phòng thi",
  description:
    "Ba chặng học C++ và thuật toán dành cho học sinh THCS, hướng tới Tin học trẻ, HSG và thi vào lớp 10 Chuyên Tin.",
  path: "/lo-trinh",
});

const stageThemes = ["foundation", "practice", "mastery"] as const;

export default function LearningRoadmapPage() {
  return (
    <main className="journey-page min-h-screen bg-background text-foreground">
      <Header />

      <section id="lo-trinh" className="journey-section journey-roadmap">
        <div className="journey-shell">
          <header className="journey-heading">
            <p>Lộ trình Tin học THCS</p>
            <h1>Xây nền tảng vững,<br />mở lối tư duy thuật toán.</h1>
            <p className="journey-heading-lead">
              Ba chặng nối tiếp từ nền tảng C++ đến tư duy thuật toán và luyện đề.
              Học sinh bắt đầu ở chặng phù hợp với năng lực thực tế.
            </p>
          </header>

          <ol className="journey-stages">
            {curriculumStages.map((stage, index) => (
              <li key={stage.id} className={`journey-stage journey-stage-${stageThemes[index]}`}>
                <div className="journey-stage-marker" aria-hidden>{index + 1}</div>
                <div className="journey-stage-content">
                  <div className="journey-stage-meta">
                    <span>Chặng {index + 1}</span>
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.goal}</p>
                  <div className="journey-stage-result">
                    <span>Sau chặng này</span>
                    <p>{stage.outcome}</p>
                  </div>
                </div>
                <div className="journey-stage-topics">
                  <p>Các mục kiến thức</p>
                  <ol aria-label={`Các mục kiến thức của ${stage.title}`}>
                    {stage.modules.map((module, moduleIndex) => (
                      <li key={module.title}>
                        <span>{String(moduleIndex + 1).padStart(2, "0")}</span>
                        {module.title}
                      </li>
                    ))}
                  </ol>
                </div>
              </li>
            ))}
          </ol>

          <p className="journey-roadmap-note">
            Điểm bắt đầu được xác định theo năng lực thực tế. Học sinh có thể đi nhanh
            qua phần đã vững sau bài đánh giá đầu vào.
          </p>
        </div>
      </section>

      <section id="dich-den" className="journey-section journey-destinations">
        <div className="journey-shell">
          <header className="journey-heading journey-heading-light">
            <p>Sau nền tảng chung</p>
            <h2>Chọn đích đến,<br />đi đúng hướng luyện thi.</h2>
          </header>

          <div className="journey-branch" aria-hidden>
            <span />
          </div>

          <div className="journey-destination-grid">
            {examTracks.map((track, index) => (
              <article key={track.id}>
                <span className="journey-destination-index">0{index + 1}</span>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <ul>
                  {track.stages.map(([title]) => <li key={title}>{title}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bat-dau" className="journey-section journey-start">
        <div className="journey-shell journey-start-grid">
          <div>
            <p className="journey-intro">Bắt đầu đúng điểm</p>
            <h2>Chưa chắc con nên bắt đầu từ chặng nào?</h2>
          </div>
          <div>
            <p>
              Bài đánh giá đầu vào giúp xác định phần kiến thức đã vững, mục tiêu thi
              và chặng học phù hợp — không xếp lớp chỉ dựa trên độ tuổi.
            </p>
            <Link href="/#danh-gia" className="journey-start-button">
              Đăng ký đánh giá đầu vào <ArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ContactDock />
    </main>
  );
}
