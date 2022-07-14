import React, {
  // eslint-disable-next-line no-unused-vars
  FormEvent,
  // eslint-disable-next-line no-unused-vars
  SyntheticEvent,
  useCallback,
  // eslint-disable-next-line no-unused-vars
  useEffect,
  useMemo,
  useState,
} from "react";
// eslint-disable-next-line no-unused-vars
import { Dropdown, DropdownButton } from "react-bootstrap";

import "./PhoneNumberInput.scss";
import {
  // eslint-disable-next-line no-unused-vars
  debounce,
  throttle,
} from "../implementationsForJSApi/debounce&throttle";

export const countryCodeMap = {
  England: "+44",
  China: "+86",
  "United States": "+1",
};

interface Props {
  countryCodeMap: {
    [key: string]: string;
  };
}

export const PhoneNumberInput: React.FC<Props> = ({ countryCodeMap }) => {
  const [countryCode, setCountryCode] = useState<string | undefined>(undefined);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const onCountryCodeChange = useCallback(
    (selectedCountryCode) => {
      if (!countryCode) {
        setPhoneNumber(`${selectedCountryCode} ${phoneNumber}` ?? "");
      } else {
        setPhoneNumber(
          selectedCountryCode + phoneNumber.slice(countryCode.length)
        );
      }
      setCountryCode(selectedCountryCode);
    },
    [countryCode, phoneNumber]
  );

  // // 这种方法是错误的因为传递的是reference 等待了时间之后 value 的值是空的
  // const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   if (countryCode && e.target.value.indexOf(countryCode) === -1) {
  //     return;
  //   }
  //   setPhoneNumber(e.target.value);
  // };
  //
  // const onUpdatePhoneNumberWithEventIsWrong = useCallback(throttle(onPhoneNumberChange, 200), []);

  // 用到closure的一定要用useCallback, 以免重复创建
  const updatePhoneNumber = useCallback(throttle(setPhoneNumber, 200), []);

  const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (countryCode && e.target.value.indexOf(countryCode) === -1) {
      return;
    }
    // 要传值而不是Event 要不然传的就是reference, value 会变
    updatePhoneNumber(e.target.value);
  };

  const dropdownItems = useMemo(
    () =>
      Object.entries(countryCodeMap).map(([key, value]) => (
        <Dropdown.Item eventKey={value} key={value}>
          {key.toLocaleUpperCase()}
        </Dropdown.Item>
      )),
    [countryCodeMap]
  );

  return (
    <div className="phone-number-input">
      <Dropdown onSelect={onCountryCodeChange}>
        <Dropdown.Toggle>Country Code</Dropdown.Toggle>
        <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
      </Dropdown>
      <form>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={onPhoneNumberChange}
          />
        </label>
      </form>
    </div>
  );
};
