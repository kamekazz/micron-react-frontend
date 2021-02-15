export default function useRooms() {
  function formatDate(inputdate) {
    // should be set and stored when message is send in data base and later retrieved to display date
    let databasedate = new Date(inputdate);
    // let databasedate2 = Date.now()

    //this date should be made when checking the date
    let date = new Date();
    // let date2 = Date.now()
    let diff = date - databasedate;

    let day = 86400000;
    let month = 2678400000;
    let year = 32140800000;
    let alot = 10000000000000000000000000;

    //first if statement checks if diff is less than a day secons if less than a month third if less than a year and third if less than a lot
    if (date - databasedate < day) {
      //instead of console log display this value
      return "Today at " + timeformat(databasedate);
    } else if (diff < month) {
      let timepassed = Math.floor(diff / day);
      if (timepassed === 1) {
        return `${timepassed} day ago`;
      } else {
        return `${timepassed} days ago`;
      }
    } else if (diff < year) {
      let timepassed = Math.floor(diff / month);

      if (timepassed === 1) {
        return `${timepassed} month ago`;
      } else {
        return `${timepassed} months ago`;
      }
    } else if (diff < alot) {
      let timepassed = Math.floor(diff / year);
      if (timepassed === 1) {
        return `${timepassed} year ago`;
      } else {
        return `${timepassed} years ago`;
      }
    }

    //converts to hour:minute pm/am
    function timeformat(date) {
      let h = date.getHours();
      let m = date.getMinutes();
      let x = h >= 12 ? "pm" : "am";
      h = h % 12;
      h = h ? h : 12;
      m = m < 10 ? "0" + m : m;
      let mytime = h + ":" + m + " " + x;
      return mytime;
    }
  }

  return {
    formatDate,
  };
}
