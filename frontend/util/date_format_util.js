// import * as moment from "moment";
const moment = require("moment");

const ONE_HOUR = 60 * 60 * 1000;
const EIGHT_HOURS = 8 * ONE_HOUR;
const TWENTYFOUR_HOURS = 24 * ONE_HOUR;

const formatPostTime = createdAt => {
  const now = new Date();
  const date = new Date(createdAt);
  const timeAgo = now - date;

  switch (true) {
    // < 8 hours ago --- x hours ago
    case timeAgo < EIGHT_HOURS:
      return moment(date).fromNow();
      break;

    // > 8, < 24 hours ago --- xx:xx AM/PM
    case timeAgo > EIGHT_HOURS && timeAgo < TWENTYFOUR_HOURS:
      return moment(date).format("LT");
      break;

    // > 24 hours ago --- MM/DD/YY
    case timeAgo > TWENTYFOUR_HOURS:
      return moment(date).format("l");
      break;
  }
}

export default formatPostTime;