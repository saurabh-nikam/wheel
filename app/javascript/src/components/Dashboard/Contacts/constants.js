import { v4 as uuidFun } from "uuid";
import * as yup from "yup";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  role: null,
};
export const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Email must be of valid format")
    .required("Valid email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    }),
});

export const PERSONS_DATA = [
  {
    name: "Ronald Richards",
    role: "Owner",
    imageUrl: "https://i.pravatar.cc/300?img=52",
    email: "ronaldrichards@borer.com",
    createdAt: "Feb 5, 2021",
  },
  {
    name: "Jacob Jones",
    role: "User",
    imageUrl: "https://i.pravatar.cc/300?img=47",
    email: "jacobjones@borer.com",
    createdAt: "Feb 5, 2021",
  },
];

export const CONTACT_DETAILS = Array(30)
  .fill(PERSONS_DATA)
  .flat()
  .map(details => ({
    id: uuidFun(),
    ...details,
  }));
