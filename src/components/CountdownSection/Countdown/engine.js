import useCountdown from "./../../../hooks/useCountdown";

const engine =
  (Component) =>
  ({ ...props }) => {
    // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    // const NOW_IN_MS = new Date().getTime();
    // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    // const [days, hours, minutes, seconds] = useCountdown(
    //   dateTimeAfterThreeDays
    // );

    return <Component {...props} {...{}} />;
  };

export default engine;
