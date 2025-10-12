/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AuthCard from "@/components/auth/auth-card";
import { SocialLogin } from "@/components/auth/social-login";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import FormField from "@/components/ui/form-field";
import { Form, Formik, FormikHelpers } from "formik";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import * as Yup from "yup";

// Validation Schema
const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase and number"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  rememberMe: Yup.boolean(),
});

const SignUpPage = () => {
  const handleSubmit = async (
    values: any,
    { setSubmitting }: FormikHelpers<any>
  ) => {
    try {
      console.log("Sign up values:", values);
      // Add your sign up logic here
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthCard
      title="Create Account"
      subtitle="Sign up to start your mindfulness journey"
      footer={
        <p className="text-center text-xs text-muted-foreground mt-8">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-foreground">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </Link>
        </p>
      }
    >
      {/* Google Sign Up Button */}
      <SocialLogin />

      {/* Sign Up Form */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          rememberMe: false,
        }}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue, errors, touched }) => (
          <Form>
            <fieldset className="space-y-4" disabled={isSubmitting}>
              {/* Name Field */}
              <FormField
                name="name"
                type="text"
                label="Full Name"
                placeholder="John Doe"
                icon={User}
                errors={errors}
                touched={touched}
              />

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

              {/* Confirm Password Field */}
              <FormField
                name="confirmPassword"
                type="password"
                label="confirmPassword"
                placeholder="••••••••"
                icon={Lock}
                errors={errors}
                touched={touched}
                isPassword={true}
              />

              {/* Remember Me Checkbox */}
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

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating account..." : "Create Account"}
              </Button>
            </fieldset>
          </Form>
        )}
      </Formik>

      {/* Sign In Link */}
      <div className="mt-6 text-center text-sm">
        <span className="text-muted-foreground">Already have an account? </span>
        <Link
          href="/sign-in"
          className="font-medium text-primary hover:underline"
        >
          Sign in
        </Link>
      </div>
    </AuthCard>
  );
};

export default SignUpPage;
