"use client";

import { useState } from "react";
import { ArrowRight, PencilLine, CheckCircle2, Loader2 } from "lucide-react";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { assessmentSteps } from "./components/first-test-data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function FirstTest() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      return;
    }
    
    setIsLoading(true);
    // Giả lập gửi form đăng ký
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section id="danh-gia" className="px-5 py-16 md:px-8 md:py-20 bg-white">
      <div className="mx-auto max-w-352">
        <Reveal>
          <SectionIntro
            centered
            icon={<PencilLine className="size-8" />}
            title="Miễn phí test đánh giá năng lực đầu vào"
            copy="Làm bài test cùng hệ thống, chữa trực tiếp cùng Mentor Chuyên Tin — biết ngay con đang ở đâu trước khi bắt đầu."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Cột trái: 3 bước thực hiện */}
          <div className="lg:col-span-7">
            <div className="relative space-y-8">
              {/* Trục dọc nối các bước */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-brand-primary/20" />
              
              {assessmentSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.1}>
                  <div className="relative flex gap-6">
                    <div className="relative z-10 flex-shrink-0 grid size-12 place-items-center rounded-full bg-brand-primary text-lg font-black text-white shadow-sm">
                      {index + 1}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-black leading-tight tracking-[-0.02em] text-brand-deep">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-muted-foreground text-pretty">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Cột phải: Form đăng ký */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-md lg:max-w-none rounded-2xl border border-slate-100 bg-slate-50/50 p-6 md:p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40">
              {isSubmitted ? (
                <Reveal>
                  <div className="flex flex-col items-center text-center py-4">
                    <CheckCircle2 className="size-14 text-emerald-500 mb-4 animate-in zoom-in-50 duration-300" />
                    <h3 className="text-xl font-black text-brand-deep">Đăng ký thành công!</h3>
                    <p className="mt-3 text-sm font-semibold text-muted-foreground leading-relaxed">
                      Cảm ơn phụ huynh/học sinh đã tin tưởng. Mentor của Chuyên Tin sẽ liên hệ qua số điện thoại <strong className="text-brand-primary">{formData.phone}</strong> trong vòng 24h tới để sắp xếp lịch test và tư vấn lộ trình.
                    </p>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={0.12}>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-lg font-black text-brand-deep text-center mb-1">
                      Đăng ký làm test miễn phí
                    </h3>
                    
                    <div className="space-y-2 text-left">
                      <Label htmlFor="name" className="text-sm font-bold text-brand-deep">
                        Họ và tên <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Họ tên của phụ huynh hoặc học sinh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-11 px-3.5 focus-visible:ring-brand-primary/50 focus-visible:border-brand-primary"
                      />
                    </div>

                    <div className="space-y-2 text-left">
                      <Label htmlFor="phone" className="text-sm font-bold text-brand-deep">
                        Số điện thoại <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Số điện thoại liên hệ"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-11 px-3.5 focus-visible:ring-brand-primary/50 focus-visible:border-brand-primary"
                      />
                    </div>

                    <div className="space-y-2 text-left">
                      <Label htmlFor="grade" className="text-sm font-bold text-brand-deep">
                        Lớp của con (Không bắt buộc)
                      </Label>
                      <Input
                        id="grade"
                        type="text"
                        placeholder="Ví dụ: Lớp 8, Lớp 9, Lớp 10..."
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="h-11 px-3.5 focus-visible:ring-brand-primary/50 focus-visible:border-brand-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-black text-primary-foreground shadow-[0_4px_0_oklch(0.28_0.12_303)] transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 cursor-pointer mt-6"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Đang đăng ký...
                        </>
                      ) : (
                        <>
                          Đăng ký làm test miễn phí
                          <ArrowRight className="size-4" />
                        </>
                      )}
                    </button>
                  </form>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstTest;
export { FirstTest };
