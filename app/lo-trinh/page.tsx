import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Braces,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileCode2,
  Flag,
  Gauge,
  Route,
  Split,
  Target,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactDock } from "@/components/layout/contact-dock";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CurriculumTabs } from "./curriculum-tabs";
import { curriculumStages, examTracks, resourceGroups } from "./data";

export const metadata: Metadata = buildPageMetadata({
  title: "Lộ trình học Chuyên Tin từ nền tảng đến phòng thi",
  description: "Lộ trình C++ và thuật toán dành cho học sinh THCS: học theo năng lực, luyện Tin học trẻ, HSG và thi vào lớp 10 Chuyên Tin.",
  path: "/lo-trinh",
});

const navItems = [
  ["Tổng quan", "#tong-quan"],
  ["Nội dung 3 lớp", "#chuong-trinh"],
  ["Theo kỳ thi", "#ky-thi"],
  ["Cách xếp lớp", "#xep-lop"],
  ["Tài liệu", "#tai-lieu"],
] as const;

function AnalysisSheet() {
  return (
    <div className="analysis-sheet" aria-label="Minh họa quy trình phân tích một bài toán thuật toán">
      <div className="analysis-sheet-top">
        <span>Phiếu phân tích bài toán</span>
        <span>CT / 01</span>
      </div>
      <div className="analysis-problem">
        <div className="analysis-icon"><Braces aria-hidden /></div>
        <div><span>Bài toán mẫu</span><strong>Tổng đoạn con</strong></div>
        <span className="analysis-status">Đang phân tích</span>
      </div>
      <ol className="analysis-steps">
        <li><span>01</span><div><strong>Phân tích</strong><p>Đọc giới hạn n và nhận ra cách cộng lại từ đầu sẽ quá chậm.</p></div><Check aria-hidden /></li>
        <li><span>02</span><div><strong>Chọn thuật toán</strong><p>Dùng mảng cộng dồn để trả lời mỗi truy vấn trong O(1).</p></div><Check aria-hidden /></li>
        <li><span>03</span><div><strong>Cài đặt</strong><code>sum = prefix[r] - prefix[l - 1];</code></div><FileCode2 aria-hidden /></li>
        <li><span>04</span><div><strong>Kiểm thử</strong><p>Kiểm tra đoạn đầu mảng, một phần tử và dữ liệu lớn.</p></div><ClipboardCheck aria-hidden /></li>
      </ol>
      <div className="analysis-result"><Gauge aria-hidden /><span>Độ phức tạp</span><strong>O(n + q)</strong></div>
    </div>
  );
}

export default function LearningRoadmapPage() {
  return (
    <main className="roadmap-page min-h-screen bg-background text-foreground">
      <Header />

      <section className="roadmap-hero">
        <div className="roadmap-shell roadmap-hero-grid">
          <div className="roadmap-hero-copy">
            <div className="roadmap-hero-mark"><Route aria-hidden /><span>Lộ trình học Tin học THCS</span></div>
            <h1>Học đúng trọng tâm.<br />Giải tốt mọi dạng bài.</h1>
            <p>Một lộ trình 3 lớp có hệ thống — từ dòng code C++ đầu tiên đến kỹ năng phân tích thuật toán và làm đề trong phòng thi.</p>
            <div className="roadmap-hero-actions">
              <Link href="/#danh-gia" className="roadmap-primary-button">Đăng ký học <ArrowRight aria-hidden /></Link>
              <a href="#tong-quan" className="roadmap-text-link">Xem lộ trình <ChevronRight aria-hidden /></a>
            </div>
            <ul className="roadmap-hero-proof" aria-label="Ba nguyên tắc của lộ trình">
              <li><Target aria-hidden /><span><strong>Kiến thức có dòng chảy</strong>Không học rời từng dạng</span></li>
              <li><BookOpen aria-hidden /><span><strong>Bài tập đa dạng</strong>Từ cơ bản đến đề thật</span></li>
              <li><ClipboardCheck aria-hidden /><span><strong>Lộ trình mạch lạc</strong>Đo bằng năng lực đầu ra</span></li>
            </ul>
          </div>
          <AnalysisSheet />
        </div>
      </section>

      <nav className="roadmap-local-nav" aria-label="Mục lục lộ trình">
        <div className="roadmap-shell">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
      </nav>

      <section id="tong-quan" className="roadmap-section roadmap-overview">
        <div className="roadmap-shell">
          <div className="roadmap-heading-row">
            <div><h2>Ba lớp học, một dòng kiến thức</h2><p>Khối lớp chỉ là gợi ý. Điểm bắt đầu được xác định bằng năng lực thực tế, không chỉ bằng tuổi.</p></div>
            <span className="roadmap-note"><Gauge aria-hidden /> Linh hoạt theo tốc độ tiếp thu</span>
          </div>
          <div className="roadmap-stage-flow">
            {curriculumStages.map((stage, index) => (
              <article key={stage.id}>
                <div className="roadmap-stage-number">0{index + 1}</div>
                <div className="roadmap-stage-icon">{index === 0 ? <Braces /> : index === 1 ? <FileCode2 /> : <Flag />}</div>
                <p>{stage.suggestedGrade}</p>
                <h3>{stage.shortName}<span>{stage.title}</span></h3>
                <p>{stage.goal}</p>
                <a href={`#${stage.id}-tab`}>Xem {stage.modules.length} mục kiến thức <ChevronRight aria-hidden /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="chuong-trinh" className="roadmap-section roadmap-curriculum">
        <div className="roadmap-shell">
          <div className="roadmap-section-heading">
            <span><BookOpen aria-hidden /> Nội dung chương trình</span>
            <h2>Biết rõ con sẽ học gì — và làm được gì sau mỗi mục.</h2>
            <p>Mỗi mục đi theo nhịp ngắn: hiểu ý tưởng, thực hành ngay 5–10 bài và chữa kỹ lỗi sai trước khi đi tiếp.</p>
          </div>
          <CurriculumTabs />
        </div>
      </section>

      <section id="ky-thi" className="roadmap-section roadmap-exams">
        <div className="roadmap-shell">
          <div className="roadmap-section-heading roadmap-section-heading-light">
            <span><Split aria-hidden /> Sau nền tảng chung</span>
            <h2>Hai mục tiêu thi, hai cách tăng tốc.</h2>
            <p>Lớp 3 phân nhánh theo cấu trúc kỳ thi để học sinh không luyện lan man hoặc bỏ sót chuyên đề quan trọng.</p>
          </div>
          <div className="roadmap-track-split">
            {examTracks.map((track, trackIndex) => (
              <article key={track.id} className={trackIndex === 0 ? "track-orange" : "track-blue"}>
                <div className="roadmap-track-heading"><div>{trackIndex === 0 ? <Flag /> : <Target />}</div><div><h3>{track.title}</h3><p>{track.description}</p></div></div>
                <ol>
                  {track.stages.map(([title, time, detail], index) => (
                    <li key={title}><span>0{index + 1}</span><div><p>{time}</p><h4>{title}</h4><p>{detail}</p></div></li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="xep-lop" className="roadmap-section roadmap-placement">
        <div className="roadmap-shell roadmap-placement-grid">
          <div>
            <span className="roadmap-section-label"><ClipboardCheck aria-hidden /> Xếp lớp theo năng lực</span>
            <h2>Không nhảy cóc. Cũng không học lại điều con đã vững.</h2>
            <p>Bài test đầu vào 60–90 phút gồm cú pháp và 2–3 bài lập trình giúp xác định đúng điểm bắt đầu. Học sinh bắt đầu muộn vẫn có thể đi nhanh qua phần đã làm chủ.</p>
            <Link href="/#danh-gia" className="roadmap-primary-button">Đăng ký đánh giá đầu vào <ArrowRight aria-hidden /></Link>
          </div>
          <ol className="roadmap-placement-steps">
            <li><span>1</span><div><strong>Kiểm tra nền tảng</strong><p>Đọc code, cú pháp C++ và khả năng chuyển đề bài thành chương trình.</p></div></li>
            <li><span>2</span><div><strong>Chọn lớp phù hợp</strong><p>Đối chiếu mục kiến thức đã làm chủ, mục tiêu thi và thời gian còn lại.</p></div></li>
            <li><span>3</span><div><strong>Đánh giá sau từng chặng</strong><p>Chỉ chuyển lớp khi đầu ra đã chắc; củng cố đúng phần còn hổng nếu cần.</p></div></li>
          </ol>
        </div>
      </section>

      <section id="tai-lieu" className="roadmap-section roadmap-resources">
        <div className="roadmap-shell">
          <div className="roadmap-heading-row"><div><h2>Nguồn học được dùng đúng vai trò</h2><p>Tài liệu không thay thế lộ trình. Mỗi nguồn được chọn cho một việc cụ thể: học, luyện hoặc kiểm tra.</p></div></div>
          <div className="roadmap-resource-list">
            {resourceGroups.map((group, index) => (
              <article key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}><Check aria-hidden />{item}</li>)}</ul></article>
            ))}
          </div>
        </div>
      </section>

      <section className="roadmap-final-cta">
        <div className="roadmap-shell">
          <div><span><Route aria-hidden /> Bắt đầu đúng điểm</span><h2>Chưa chắc con nên bắt đầu từ lớp nào?</h2><p>Đăng ký để được đánh giá nền tảng, mục tiêu thi và đề xuất chặng học phù hợp.</p></div>
          <Link href="/#danh-gia" className="roadmap-cta-button">Đăng ký học <ArrowRight aria-hidden /></Link>
        </div>
      </section>

      <Footer />
      <ContactDock />
    </main>
  );
}
