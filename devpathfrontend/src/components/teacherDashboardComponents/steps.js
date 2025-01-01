import React from "react";

const Steps = ({ currentStep = 1 }) => {
    const steps = ["Add Course", "Add Sections", "Review & Submit"];

    return (
        <div className="steps-wrapper">
            <div className="steps-container">
                {/* Progress bar background */}
                <div className="progress-bar-bg" />

                {/* Active progress bar */}
                <div
                    className="progress-bar-active"
                    style={{
                        width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`
                    }}
                />

                {/* Steps */}
                {steps.map((step, index) => (
                    <div key={index} className="step-item">
                        <div
                            className={`step-circle ${index + 1 === currentStep
                                    ? "current"
                                    : index + 1 < currentStep
                                        ? "completed"
                                        : ""
                                }`}
                        >
                            {index + 1}
                        </div>
                        <span
                            className={`step-label ${index + 1 === currentStep ? "current" : ""
                                }`}
                        >
                            {step}
                        </span>
                    </div>
                ))}
            </div>
            <style jsx>{`
        .steps-wrapper {
          width: 100%;
          max-width: 768px;
          margin: 0 auto;
        }

        .steps-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          margin-bottom: 2rem;
          padding: 0 1rem;
        }

        .progress-bar-bg {
          position: absolute;
          height: 2px;
          width: 100%;
          background-color: #e5e7eb;
          top: 50%;
          transform: translateY(-50%);
        }

        .progress-bar-active {
          position: absolute;
          height: 2px;
          background-color: #fbbf24;
          top: 50%;
          transform: translateY(-50%);
          transition: width 0.3s ease;
        }

        .step-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
        }

        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          border: 2px solid #e5e7eb;
          background-color: white;
          color: #6b7280;
          transition: all 0.3s ease;
        }

        .step-circle.current {
          border-color: #fbbf24;
          background-color: #fbbf24;
          color: white;
        }

        .step-circle.completed {
          border-color: #fbbf24;
          background-color: #fbbf24;
          color: white;
        }

        .step-label {
          margin-top: 0.5rem;
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
          position: absolute;
          bottom: -24px;
          white-space: nowrap;
        }

        .step-label.current {
          color: #d97706;
        }

        @media (max-width: 640px) {
          .step-label {
            font-size: 12px;
          }

          .step-circle {
            width: 28px;
            height: 28px;
            font-size: 12px;
          }
        }
      `}</style>
        </div>
    );
};

export default Steps;