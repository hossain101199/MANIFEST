/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AuthCard from "@/components/auth/auth-card";
import { SocialLogin } from "@/components/auth/social-login";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import FormField from "@/components/ui/form-field";
import { Form, Formik, FormikHelpers } from "formik";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import * as Yup from "yup";

// Validation Schema
const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});

const SignInPage = () => {
  const handleSubmit = async (
    values: any,
    { setSubmitting }: FormikHelpers<any>
  ) => {
    try {
      console.log("Sign in values:", values);
      // Add your sign in logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to continue your wellness journey"
    >
      {/* Google Sign Up Button */}
      <SocialLogin />

      {/* Sign In Form */}
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={signInSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue, errors, touched }) => (
          <Form>
            <fieldset className="space-y-4" disabled={isSubmitting}>
              {/* Email Field */}
              <FormField
                name="email"
                type="email"
                label="Email"
                placeholder="you@example.com"
                icon={Mail}
                errors={errors}
                touched={touched}
              />

              {/* Password Field */}
              <FormField
                name="password"
                type="password"
                label="Password"
                placeholder="••••••••"
                icon={Lock}
                errors={errors}
                touched={touched}
                isPassword={true}
              />

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={values.rememberMe}
                    onCheckedChange={(checked) =>
                      setFieldValue("rememberMe", checked)
                    }
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    Remember me on this device
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </fieldset>
          </Form>
        )}
      </Formik>

      {/* Sign Up Link */}
      <div className="mt-6 text-center text-sm">
        <span className="text-muted-foreground">
          Don&apos;t have an account?{" "}
        </span>
        <Link
          href="/sign-up"
          className="font-medium text-primary hover:underline"
        >
          Sign up
        </Link>
      </div>
    </AuthCard>
  );
};

export default SignInPage;
