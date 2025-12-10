function MovingBanner() {
  return (
    <div className="fixed mt-31 sm:mt-28 z-30 w-full overflow-hidden bg-amber-600 text-white py-2">
      <p
        className="
          whitespace-nowrap inline-block
          animate-[marquee_10s_linear_infinite]
          text-lg font-semibold
        "
        style={{
          whiteSpace: "nowrap",
        }}
      >
        The verify email functionality and reset password is not available currently, We apologize for the inconvenience
      </p>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}

export default MovingBanner;
