"use client"

import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Button} from "@/components/ui/button";
import {InputField} from "@/components/forms/InputField";
import Link from "next/link";

const SignUp = () => {
    const {register, handleSubmit, control, formState: {errors, isSubmitting}} = useForm<SignUpFormData>({
        defaultValues: {
            email:
                "Doe",
            password:
                "password",
        },
        mode: "onBlur"
    })
    const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
        try {
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1 className={"form-title"}>Sign in to your account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-5"}>
                <InputField name={"email"} label={"Email"} placeholder={"Insert your email here"} register={register}
                            error={errors.email} validation={{
                    required: "Email is required",
                    pattern: /^w+@\w+\.\w+$/,
                    message: "Email field is required!"
                }}></InputField>
                <InputField name={"password"} label={"Password"} placeholder={"Insert your password here"}
                            register={register} error={errors.password}
                            validation={{required: "Password is required", minLength: 8}}></InputField>
                <Button type="submit" disabled={isSubmitting} className={"yellow-btn w-full mt-5"}>
                    {isSubmitting ? "Signing in..." : "Sign in"}
                </Button>
                <p className={"text-center text-sm text-gray-500 mt-5"}>
                    Do you not have an account? <Link href="/sign-up"
                                                      className="text-blue-500 hover:underline font-bold">Sign up</Link>
                </p>
            </form>
        </>
    )
}
export default SignUp
