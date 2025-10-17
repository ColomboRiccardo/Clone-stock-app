"use client"

import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Button} from "@/components/ui/button";
import {InputField} from "@/components/forms/InputField";
import {SelectField} from '@/components/forms/SelectField';
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import Link from "next/link";

const SignUp = () => {
    const {register, handleSubmit, control, formState: {errors, isSubmitting}} = useForm<SignUpFormData>({
        defaultValues: {
            fullName: "John",
            email:
                "Doe",
            password:
                "password",
            country:
                "IT",
            investmentGoals:
                "Growth",
            riskTolerance:
                "Medium",
            preferredIndustry:
                "Technology"
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
            <h1 className={"form-title"}>Sign up and personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-5"}>
                <InputField name={"fullName"} label={"Full Name"} placeholder={"Insert your name here"}
                            register={register} error={errors.fullName}
                            validation={{required: "Full name is required",}}></InputField>
                <InputField name={"email"} label={"Email"} placeholder={"Insert your email here"} register={register}
                            error={errors.email} validation={{
                    required: "Email is required",
                    pattern: /^w+@\w+\.\w+$/,
                    message: "Email field is required!"
                }}></InputField>
                <InputField name={"password"} label={"Password"} placeholder={"Insert your password here"}
                            register={register} error={errors.password}
                            validation={{required: "Password is required", minLength: 8}}></InputField>
                <InputField name={"country"} label={"Country"} placeholder={"Insert your country here"}
                            register={register} error={errors.country}
                            validation={{required: "Country is required"}}></InputField>
                <SelectField name={"investmentGoals"} label={"Investment Goals"}
                             placeholder={"Select your investment goals here"} control={control}
                             options={INVESTMENT_GOALS} error={errors.investmentGoals}></SelectField>
                <SelectField name={"riskTolerance"} label={"Risk tolerance"}
                             placeholder={"Select your risk tolerance here"} control={control}
                             options={RISK_TOLERANCE_OPTIONS} error={errors.riskTolerance}></SelectField>
                <SelectField name={"preferredIndustry"} label={"Preferred Industry"}
                             placeholder={"Select your preferred industry here"} control={control}
                             options={PREFERRED_INDUSTRIES} error={errors.preferredIndustry}></SelectField>
                <Button type="submit" disabled={isSubmitting} className={"yellow-btn w-full mt-5"}>
                    {isSubmitting ? "Signing up..." : "Sign up"}
                </Button>
                <p className={"text-center text-sm text-gray-500 mt-5"}>
                    Already have an account? <Link href="/sign-in" className="text-blue-500 hover:underline font-bold">Sign
                    in</Link>
                </p>
            </form>
        </>
    )
}
export default SignUp
