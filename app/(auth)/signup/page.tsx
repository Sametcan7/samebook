"use client";
import Logo from "@/samebook/ui/logo";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "The name must be 3 characters or more" })
    .regex(/^[a-zA-Z]+$/, { message: "The name must contain only letters" }),
  surname: z
    .string()
    .min(3, { message: "The name must be 3 characters or more" })
    .regex(/^[a-zA-Z]+$/, { message: "The surname must contain only letters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  gender: z.enum(["Male", "Female", "Custom"], {
    errorMap: () => ({ message: "Pick a gender" }),
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  return (
    <div className="mx-auto w-auto max-w-[1200px] px-[30px] pt-[5%] text-xl">
      <div className="inline-block w-[50%] pr-4 align-top">
        <div className="cursor-default">
          <Logo />
        </div>
        <p className="text-xl">
          Samebook allows you to connect with people you know and share
          what&apos;s going on in your life.
        </p>
      </div>
      <div className="inline-block w-[50%] align-top">

        <form
  action="ads"
// onSubmit={handleSubmit((data) => console.log(data))}
          className="flex flex-col rounded-lg border-[1px] border-divider_secondary bg-background-secondary p-4 shadow-xl shadow-background-secondary">
          <input
            {...register("name")}
            className="my-1 rounded-lg bg-background-primary p-2"
            placeholder="Name"
          />
          {errors?.name?.message && (
            <p className="py-1 text-center text-sm text-red-500">
              {errors.name.message}
            </p>
          )}

          <input
            {...register("surname")}
            className="my-1 rounded-lg bg-background-primary p-2"
            placeholder="Surname"
          />
          {errors?.surname?.message && (
            <p className="py-1 text-center text-sm text-red-500">
              {errors.surname.message}
            </p>
          )}
          <input
            {...register("email")}
            className="my-1 rounded-lg bg-background-primary p-2"
            placeholder="Email"
            type="email"
          />
          {errors?.email?.message && (
            <p className="py-1 text-center text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
          <input
            {...register("password")}
            className="my-1 rounded-lg bg-background-primary p-2"
            placeholder="Password"
            type="password"
          />
          {errors?.password?.message && (
            <p className="py-1 text-center text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
          <select
            className="my-1 rounded-lg bg-background-primary p-2"
            {...register("gender")}>
            <option value="">Select...</option>

            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Custom">Custom</option>
          </select>
          {errors?.gender?.message && (
            <p className="py-1 text-center text-sm text-red-500">
              {errors.gender.message}
            </p>
          )}
          <button className="mt-4 rounded-lg bg-button-primary p-4">
            Sign Up
          </button>
          <Link href="/" className="mt-4 text-center text-sm">
            Already have an account? Log in
          </Link>
        </form>
      </div>
    </div>
  );
}
