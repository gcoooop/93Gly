// import * as moment from "moment";
const moment = require("moment");

const ONE_HOUR = 60 * 60 * 1000;
const TWELVE_HOURS = 12 * ONE_HOUR;

const formatPostTime = createdAt => {
  const now = new Date();
  const date = new Date(createdAt);
  const timeAgo = now - date;
  const daysAgo = now.getDay() - date.getDay();

  switch (true) {
    // < 12 hours ago --- x hours ago
    case timeAgo < TWELVE_HOURS:
      return moment(date).fromNow();

    // > 1 day ago --- MM/DD/YY
    case daysAgo > 0:
      return moment(date).format("l");

    // > 12 hours ago && < 1 day ago --- xx:xx AM/PM
    default:
      return moment(date).format("LT");
  }
}

export default formatPostTime;