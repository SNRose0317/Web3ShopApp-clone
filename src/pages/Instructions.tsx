import React from 'react';
import { 
  Page, 
  Card, 
  Layout, 
  TextContainer, 
  Text, 
  List,
  CalloutCard,
  Box,
  Divider
} from '@shopify/polaris';
import Logo from '../components/Logo';

const Instructions: React.FC = () => {
  return (
    <Page 
      title="Instructions & Documentation"
      backAction={{content: 'Home', url: '/'}}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <Logo height={50} width={240} whiteText={false} />
      </div>
      <Layout>
        <Layout.Section>
          <Card>
            <div style={{ padding: '16px' }}>
              <TextContainer>
              <Text variant="headingMd" as="h2" color="success">How the Web3 Diagnostics Lab Integration Works</Text>
              <Text variant="bodyMd" as="p">
                Our integration service connects your Evexia Diagnostics account with your
                Shopify store to automate the lab test ordering process. Here's an overview
                of how the system works:
              </Text>
              </TextContainer>
            </div>
            
            <div style={{ padding: '16px' }}>
              <TextContainer>
                <Text variant="headingMd" as="h3" color="primary">Lab Test Ordering Workflow</Text>
                <List type="number">
                  <List.Item>
                    Your patients purchase lab tests from your Shopify store
                  </List.Item>
                  <List.Item>
                    Our integration automatically creates a lab requisition in your Evexia account
                  </List.Item>
                  <List.Item>
                    The patient receives instructions on how to complete their lab test
                  </List.Item>
                  <List.Item>
                    Patient visits a lab location to have their specimen collected
                  </List.Item>
                  <List.Item>
                    Lab results are delivered to your Evexia account
                  </List.Item>
                  <List.Item>
                    Results are automatically shared with your patient via our secure portal
                  </List.Item>
                </List>
              </TextContainer>
            </div>
            
            <Divider />
            
            <div style={{ padding: '16px' }}>
              <TextContainer>
                <Text variant="headingMd" as="h3" color="primary">Integration Pricing Model</Text>
                <Text variant="bodyMd" as="p">
                  Our integration service adds a 30% markup to the lab costs between Evexia Diagnostics
                  and your clinic. This markup covers the cost of the integration service, automation,
                  and result delivery.
                </Text>
                <Box paddingBlockStart="400" paddingBlockEnd="400">
                  <Text variant="bodyMd" as="p">
                    <strong>Example:</strong> If a lab test costs $100 from Evexia Diagnostics, you would pay $130
                    through our integration service.
                  </Text>
                </Box>
                <Text variant="bodyMd" as="p">
                  You can set your own pricing for your patients in your Shopify store, allowing you
                  to determine your clinic's markup on top of our integration fee.
                </Text>
              </TextContainer>
            </div>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <CalloutCard
            title="Manual Setup Process"
            illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
            primaryAction={{
              content: 'Contact Support',
              url: '/support',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <p>
                Currently, our integration requires manual setup by our team. Contact our
                support team to connect your Evexia Diagnostics account with your Shopify store.
              </p>
              <p style={{ marginTop: '10px' }}>
                <a href="https://Web3Diagnostics.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e3a620', textDecoration: 'none' }}>
                  Learn More about our services
                </a>
              </p>
            </div>
          </CalloutCard>
        </Layout.Section>

        <Layout.Section>
          <Card padding="400">
            <TextContainer>
              <Text variant="headingMd" as="h2" color="success">Lab Results Retrieval</Text>
              <Text variant="bodyMd" as="p">
                Once lab results are available in your Evexia account, our integration
                automatically retrieves them and makes them available to your patients.
              </Text>
              <List>
                <List.Item>
                  Results are securely stored and accessible only to the patient
                </List.Item>
                <List.Item>
                  Patients receive notification when their results are ready
                </List.Item>
                <List.Item>
                  You maintain complete access to all patient results through your Evexia account
                </List.Item>
              </List>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Instructions;
