"use client";

import { useState } from "react";
import { BookOpenCheck, CheckCircle2, Target } from "lucide-react";
import { curriculumStages } from "./data";

export function CurriculumTabs() {
  const [activeId, setActiveId] = useState(curriculumStages[0].id);
  const active = curriculumStages.find((stage) => stage.id === activeId) ?? curriculumStages[0];

  return (
    <div className="roadmap-syllabus">
      <div className="roadmap-tabs" role="tablist" aria-label="Chọn lớp học">
        {curriculumStages.map((stage) => (
          <button
            key={stage.id}
            id={`${stage.id}-tab`}
            type="button"
            role="tab"
            aria-selected={active.id === stage.id}
            aria-controls={`${stage.id}-panel`}
            tabIndex={active.id === stage.id ? 0 : -1}
            onClick={() => setActiveId(stage.id)}
            className="roadmap-tab"
          >
            <span>{stage.shortName}</span>
            <strong>{stage.title}</strong>
          </button>
        ))}
      </div>

      <section
        id={`${active.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${active.id}-tab`}
        className="roadmap-tab-panel"
      >
        <div className="roadmap-stage-summary">
          <div>
            <p className="roadmap-stage-grade">{active.suggestedGrade}</p>
            <h3>{active.shortName}: {active.title}</h3>
            <p>{active.goal}</p>
          </div>
          <dl>
            <div>
              <dt><CheckCircle2 aria-hidden /> Đầu ra</dt>
              <dd>{active.outcome}</dd>
            </div>
            <div>
              <dt><Target aria-hidden /> Hướng tới</dt>
              <dd>{active.exam}</dd>
            </div>
          </dl>
        </div>

        <div className="roadmap-module-list">
          {active.modules.map((module, index) => (
            <details key={module.title} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{module.title}</strong>
                <span className="roadmap-summary-action">Xem nội dung</span>
              </summary>
              <div className="roadmap-module-body">
                <p>{module.content}</p>
                <p><BookOpenCheck aria-hidden /> <strong>Bài tập:</strong> {module.practice}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
