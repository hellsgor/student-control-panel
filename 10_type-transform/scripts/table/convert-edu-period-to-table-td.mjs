import {constants} from "../constants/consts.mjs";

export function convertEduPeriodToTableTd(startYear) {
  const finishStudyDate = new Date(startYear + constants.EDUCATION_PERIOD, 9);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth());

  const course = finishStudyDate < today
    ? 'закончил'
    : Math.floor((today - new Date(startYear, 8)) / (1000 * 60 * 60 * 24 * 365)) + 1;

  return `${startYear}-${startYear + constants.EDUCATION_PERIOD} (${Number.isFinite(course)
    ? course + ' курс'
    : course})`
}
