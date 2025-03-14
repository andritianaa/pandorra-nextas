"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as z from 'zod';

import { editPassword } from '@/actions/user.ations';
import { Input } from '@/components/tremor/inputs/input';
import { Button } from '@/components/tremor/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/tremor/ui/card';
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';

const accountSecuritySchema = z
  .object({
    currentPassword: z.string().min(1, {
      message: "The password is required",
    }),
    newPassword: z.string().min(8, {
      message: "The new password must be at least 8 characters long.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  })

export function AccountSecurityForm() {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof accountSecuritySchema>>({
    resolver: zodResolver(accountSecuritySchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(values: z.infer<typeof accountSecuritySchema>) {
    setIsLoading(true)
    await editPassword(values.newPassword, values.currentPassword)
      .then(() => {
        toast({
          title: t(`Success`),
          description: t(`Password updated successfully`),
          variant: "success",
          duration: 3000,
        })
      })
      .catch((e) => {
        toast({
          title: t(`Error`),
          description: t(e.message),
          variant: "error",
          duration: 3000,
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Card>
      <CardTitle>{t(`Account security`)}</CardTitle>
      <CardDescription>
        {t(`Update your security information here.`)}
      </CardDescription>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t(`Current password`)}</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t(`New password`)}</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t(`Confirm password`)}</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" isLoading={isLoading}>
              {t(`Update Security`)}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
