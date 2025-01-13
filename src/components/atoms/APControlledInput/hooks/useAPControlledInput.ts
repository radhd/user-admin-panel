import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import type {
  Control,
  DefaultValues,
  FieldErrors,
  FieldValues,
  Resolver,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form";
import type { AnyObjectSchema, InferType } from "yup";

export type TUseAPControlledInputReturn<T extends FieldValues> = {
  control: Control<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  errors: FieldErrors<T>;
  reset: UseFormReset<T>;
};

export const useAPControlledInput = <
  TSchema extends AnyObjectSchema,
  TFieldValues extends FieldValues = InferType<TSchema>,
>(
  schema: TSchema,
  defaultValues: DefaultValues<TFieldValues>
): TUseAPControlledInputReturn<TFieldValues> => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFieldValues>({
    resolver: yupResolver(schema) as Resolver<TFieldValues>,
    defaultValues,
  });

  return { control, handleSubmit, errors, reset };
};
