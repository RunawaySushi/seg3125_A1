import './WorkflowBox.css';

function WorkflowGrid({ workflowSteps, workflowStep, handleWorkflowCheck }) {
  return (
    <div className="workflow-grid">
      {workflowSteps.map((step, index) => (
        index <= workflowStep && (
          <div key={index} className="workflow-item">

            <input
              type="checkbox"
              checked={index < workflowStep}
              disabled={index < workflowStep}
              onChange={() => handleWorkflowCheck(index)}
            />

            <span className={index < workflowStep ? "done" : ""}>
              {step}
            </span>

          </div>
        )
      ))}
    </div>
  );
}

export default WorkflowGrid;