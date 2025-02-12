"use client"
import { useTranslation } from 'react-i18next';

import { editLangange } from '@/actions/user.ations';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/tremor/inputs/select';
import { useToast } from '@/hooks/use-toast';
import { useUser } from '@/hooks/use-user';

export function EditLangage() {
  const { t } = useTranslation()
  const { user } = useUser()
  const { toast } = useToast()
  const data = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "fr",
      label: "French",
    },
    {
      value: "es",
      label: "Spanish",
    },
    {
      value: "it",
      label: "Italian",
    },
  ]

  const handleEdit = async (value: string) => {
    await editLangange(value)
      .then(() => {
        toast({
          title: t(`Success`),
          description: t(
            `Your preferred langage has been updated successfully.`,
          ),
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
  }
  if (user) {
    return (
      <Select
        onValueChange={(value) => handleEdit(value)}
        defaultValue={user.language}
      >
        <SelectTrigger>
          <SelectValue placeholder={t(`Select language`)} />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {t(item.label)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }
}
