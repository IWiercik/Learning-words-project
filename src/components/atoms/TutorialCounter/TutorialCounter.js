function TutorialCounter({ text }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-circle"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <text
        x="5.5"
        y="15"
        fill="white"
        fontSize="9px"
        stroke="none"
        fontFamily="Oswald,sans-serif"
        fontWeight="bold"
        className="counter"
      >
        {`${text}/3`}
      </text>
    </svg>
  );
}

export default TutorialCounter;
