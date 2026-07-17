import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { WhyUsCard } from "./components/why-us-card";
import { whyUsItems, whyUsMobileStories } from "./components/why-us-data";
import { WhyUsPhotoSlot } from "./components/why-us-photo-slot";

function WhyUs() {
  const [item1, item2, item3, item4, item5, item6] = whyUsItems;

  return (
    <section id="vi-sao-chuyen-tin" className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-352">
        <Reveal>
          <SectionIntro
            centered
            wide
            title="Vì sao chọn Chuyên Tin?"
            copy={
              <>
                <span className="lg:hidden">
                  Chương trình ôn luyện chuyên sâu và thực chất. 6 điểm khác biệt cốt lõi qua các hoạt động thực tế tại lớp học.
                </span>
                <span className="hidden lg:inline">
                  Lộ trình học thuật toán C++ chuyên biệt, nghiêm túc và đồng hành sát sao cùng mentor chuyên môn cao.
                </span>
              </>
            }
          />
        </Reveal>

        <div className="why-us-grid mt-12">
          <WhyUsCard
            item={item1}
            contentIndex={0}
            staggerIndex={0}
            tone="purple"
            className="why-us-area-card1"
          />
          <WhyUsCard
            item={item2}
            contentIndex={1}
            staggerIndex={1}
            tone="yellow"
            className="why-us-area-card2"
          />
          <WhyUsPhotoSlot
            label="Ảnh học sinh Chuyên Tin"
            index={2}
            src="/trust/7.png"
            alt="Học sinh Chuyên Tin trong buổi học"
            mobileStory={whyUsMobileStories.photoA}
            className="why-us-area-photoA"
          />
          <WhyUsCard
            item={item3}
            contentIndex={2}
            staggerIndex={3}
            tone="yellow"
            className="why-us-area-card3"
          />
          <WhyUsCard
            item={item4}
            contentIndex={3}
            staggerIndex={4}
            tone="purple"
            className="why-us-area-card4"
          />
          <WhyUsPhotoSlot
            label="Ảnh buổi mentor chữa bài"
            index={5}
            src="/trust/6.png"
            alt="Mentor Chuyên Tin chữa bài cho học sinh"
            mobileStory={whyUsMobileStories.photoB}
            className="why-us-area-photoB"
          />
          <WhyUsCard
            item={item5}
            contentIndex={4}
            staggerIndex={6}
            tone="purple"
            className="why-us-area-card5"
          />
          <WhyUsPhotoSlot
            label="Ảnh không gian học tập"
            index={7}
            src="/trust/5.png"
            alt="Không gian học tập tại Chuyên Tin"
            mobileStory={whyUsMobileStories.photoC}
            className="why-us-area-photoC"
          />
          <WhyUsCard
            item={item6}
            contentIndex={5}
            staggerIndex={8}
            tone="yellow"
            className="why-us-area-card6"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
export { WhyUs };
