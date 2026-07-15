import {
  Form,
  FormContainer,
  FormSection,
  FormTitle,
} from "@dev-waren/react-form-kit";

import { Button, ModalContainer } from "#/shared/components";
import { CreateFields } from "./components";
import { useCreateOrgForm } from "./hooks/useCreateOrgForm";

export function CreateOrganization() {
  const form = useCreateOrgForm();

  return (
    <ModalContainer aria-labelledby="create-new-organization">
      <FormContainer>
        <Form {...form}>
          <FormTitle id="create-new-organization">
            Create New Organization
          </FormTitle>

          <FormSection>
            <CreateFields />
          </FormSection>

          <Button type="submit" variant="secondary">
            Create
          </Button>
        </Form>
      </FormContainer>
    </ModalContainer>
  );
}
