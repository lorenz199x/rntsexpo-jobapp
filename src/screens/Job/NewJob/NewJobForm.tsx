// screens/PostNewJob.tsx
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "@components/Input/Input";
import { verticalScale } from "@utils/sizes";
import ButtonText from "@components/Button/ButtonText";
import { fetchJobs, postNewJob } from "@services/api";
import Utils from "@utils/index";
import { useRecoilValue } from "recoil";
import { jobListState } from "@recoil/index";
import ScrollableContainer from "@components/Containers/ScrollableContainer";
export interface PostNewJobInput {
  title: string;
  description: string;
  company: string;
  location: string;
  requirements: string;
  skills: string;
  salaryRange: string;
  postedDate: string;
}

const NewJobForm: React.FC = () => {
  const jobs = useRecoilValue(jobListState);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostNewJobInput>({
    defaultValues: {
      // id: jobs.length + 1, // this is temporary approach, expected that the actual data has specific unique values
      title: "",
      description: "",
      company: "",
      location: "",
      requirements: "",
      skills: "",
      salaryRange: "",
      postedDate: Utils.helpers.getCurrentDate(),
    },
  });

  const onSubmit: SubmitHandler<PostNewJobInput> = async (data) => {
    try {
      const result = await postNewJob(data);
      // Handle success or navigation logic
      console.log("onsubmit", result.message, result.success);
      reset();
    } catch (error) {
      // Handle error, show a message, etc.
      console.error("onsubmit", error);
    }
  };

  return (
    <ScrollableContainer showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Post New Job</Text>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Title"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.inputs}
              showIcon={false}
            />
          )}
          name="title"
          rules={{ required: "Title is required" }}
        />
        {errors.title && (
          <Text style={styles.error}>{errors.title.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Description"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.inputs}
              showIcon={false}
            />
          )}
          name="description"
          rules={{ required: "Description is required" }}
        />
        {errors.description && (
          <Text style={styles.error}>{errors.description.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Company"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.inputs}
              showIcon={false}
            />
          )}
          name="company"
          rules={{ required: "Company is required" }}
        />
        {errors.company && (
          <Text style={styles.error}>{errors.company.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Location"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.inputs}
              showIcon={false}
            />
          )}
          name="location"
          rules={{ required: "Location is required" }}
        />
        {errors.location && (
          <Text style={styles.error}>{errors.location.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Requirements"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.inputs}
              showIcon={false}
            />
          )}
          name="requirements"
          rules={{ required: "Requirements are required" }}
        />
        {errors.requirements && (
          <Text style={styles.error}>{errors.requirements.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Skills"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.inputs}
              showIcon={false}
            />
          )}
          name="skills"
          rules={{ required: "Skills are required" }}
        />
        {errors.skills && (
          <Text style={styles.error}>{errors.skills.message}</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              testID="input"
              placeholder="Salary Range"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={styles.inputs}
              showIcon={false}
            />
          )}
          name="salaryRange"
          rules={{ required: "Salary Range is required" }}
        />
        {errors.salaryRange && (
          <Text style={styles.error}>{errors.salaryRange.message}</Text>
        )}

        <ButtonText buttonText="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollableContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  inputs: {
    borderWidth: 2,
    borderBlockColor: "black",
    marginBottom: 10,
    height: verticalScale(55),
  },
});

export default NewJobForm;
