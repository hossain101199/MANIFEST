/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { ErrorMessage, Field } from "formik";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "./input";
import PasswordToggle from "./password-toggle";

interface FormFieldProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  icon: LucideIcon;
  errors?: any;
  touched?: any;
  isPassword?: boolean;
}

const FormField = ({
  name,
  type,
  label,
  placeholder,
  icon: Icon,
  errors,
  touched,
  isPassword,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = errors?.[name] && touched?.[name];

  if (isPassword) {
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium mb-2">
          {label}
        </label>
        <div className="relative">
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Field
            as={Input}
            id={name}
            name={name}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            className={cn("px-10", hasError && "border-destructive")}
          />
          <PasswordToggle
            show={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
          />
        </div>
        <ErrorMessage
          name={name}
          component="p"
          className="text-sm text-destructive mt-1"
        />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Field
          as={Input}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={cn("pl-10", hasError && "border-destructive")}
        />
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="text-sm text-destructive mt-1"
      />
    </div>
  );
};

export default FormField;
