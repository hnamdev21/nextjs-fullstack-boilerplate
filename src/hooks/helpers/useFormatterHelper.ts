"use client";

import { DateTimeFormatOptions, NumberFormatOptions, useFormatter, useLocale, useNow, useTimeZone } from "next-intl";

const useFormatterHelper = () => {
  const formatter = useFormatter();
  const timeZone = useTimeZone();
  const locale = useLocale();
  const now = useNow();

  const getDateTime = (date: Date, options?: DateTimeFormatOptions) => {
    return formatter.dateTime(date, {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: timeZone,
      ...options,
    });
  };
  const getRelativeTime = (date: Date, style?: Intl.RelativeTimeFormatStyle) => {
    return formatter.relativeTime(date, {
      style: style,
    });
  };

  const getCurrency = (number: number, currency = "VND") => {
    return formatter.number(number, {
      style: "currency",
      currency,
    });
  };

  const getNumber = (number: number, options?: NumberFormatOptions) => {
    return formatter.number(number, {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      ...options,
    });
  };

  const getNow = () => {
    return now;
  };

  const getLocale = () => {
    return locale;
  };

  const getTimeZone = () => {
    return timeZone;
  };

  return { getDateTime, getRelativeTime, getCurrency, getNumber, getNow, getLocale, getTimeZone };
};

export default useFormatterHelper;
