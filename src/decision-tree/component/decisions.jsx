export function Decisions({ activeDecision }) {
    return (
      <ul>
        {activeDecision.decisions.map((decision) => (
          <li key={decision.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
            </svg>
  
            <label>
              <input type="radio" name="decision-tree" value={decision.id} />{" "}
              {decision.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }
  
