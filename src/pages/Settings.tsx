import React from 'react';
import { 
  Page, 
  Card, 
  Layout, 
  TextContainer, 
  Text, 
  Badge,
  Box,
  Button,
  Icon,
  HorizontalStack,
  VerticalStack
} from '@shopify/polaris';
import { CircleTickMajor, LockMajor } from '@shopify/polaris-icons';
import Logo from '../components/Logo';

const Settings: React.FC = () => {
  return (
    <Page 
      title="Account Settings"
      backAction={{content: 'Home', url: '/'}}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <Logo height={50} width={240} whiteText={false} />
      </div>
      <Layout>
        <Layout.Section>
          <Card padding="400">
            <TextContainer>
              <Text variant="headingMd" as="h2" color="primary">Connection Status</Text>
              <Box paddingBlockStart="400" paddingBlockEnd="400">
                <HorizontalStack align="center" gap="2">
                  <Icon source={CircleTickMajor} color="success" />
                  <Text variant="bodyMd" as="p" fontWeight="bold" color="success">
                    Connected to Evexia Diagnostics
                  </Text>
                </HorizontalStack>
              </Box>
              <Text variant="bodyMd" as="p">
                  Your Web3 Diagnostics integration with Evexia is active and working properly.
                  Orders placed in your store will be automatically processed.
              </Text>
            </TextContainer>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card padding="400">
            <TextContainer>
              <Text variant="headingMd" as="h2" color="primary">Account Information</Text>
            </TextContainer>
            
            <div style={{ marginTop: '1rem' }}>
              <VerticalStack gap="4">
                <HorizontalStack>
                  <Box width="100%">
                    <Text variant="bodyMd" as="p" fontWeight="bold">Evexia Account ID</Text>
                  </Box>
                  <Text variant="bodyMd" as="p">EVEX-12345</Text>
                </HorizontalStack>
                
                <HorizontalStack>
                  <Box width="100%">
                    <Text variant="bodyMd" as="p" fontWeight="bold">Connection Date</Text>
                  </Box>
                  <Text variant="bodyMd" as="p">January 1, 2023</Text>
                </HorizontalStack>
                
                <HorizontalStack>
                  <Box width="100%">
                    <Text variant="bodyMd" as="p" fontWeight="bold">Plan</Text>
                  </Box>
                  <Badge status="warning">Standard</Badge>
                </HorizontalStack>
                
                <HorizontalStack>
                  <Box width="100%">
                    <Text variant="bodyMd" as="p" fontWeight="bold">Service Fee</Text>
                  </Box>
                  <Text variant="bodyMd" as="p">30% markup on lab costs</Text>
                </HorizontalStack>
              </VerticalStack>
            </div>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card padding="400">
            <TextContainer>
              <Text variant="headingMd" as="h2" color="primary">Configuration Settings</Text>
              <Box paddingBlockStart="200">
                <Text variant="bodyMd" as="p">
                  Configuration changes require assistance from our support team. 
                  Please contact us to request any changes to your integration settings.
                </Text>
              </Box>
            </TextContainer>
            
            <div style={{ marginTop: '1rem' }}>
              <VerticalStack gap="4">
                <HorizontalStack>
                  <Box width="100%">
                    <HorizontalStack align="center" gap="2">
                      <Icon source={LockMajor} color="highlight" />
                      <Text variant="bodyMd" as="p" fontWeight="bold">
                        API Keys
                      </Text>
                    </HorizontalStack>
                  </Box>
                  <Button primary>Contact Support to Update</Button>
                </HorizontalStack>
                
                <HorizontalStack>
                  <Box width="100%">
                    <HorizontalStack align="center" gap="2">
                      <Icon source={LockMajor} color="base" />
                      <Text variant="bodyMd" as="p" fontWeight="bold">
                        Product Mappings
                      </Text>
                    </HorizontalStack>
                  </Box>
                  <Button primary>Contact Support to Update</Button>
                </HorizontalStack>
                
                <HorizontalStack>
                  <Box width="100%">
                    <HorizontalStack align="center" gap="2">
                      <Icon source={LockMajor} color="base" />
                      <Text variant="bodyMd" as="p" fontWeight="bold">
                        Patient Notification Settings
                      </Text>
                    </HorizontalStack>
                  </Box>
                  <Button primary>Contact Support to Update</Button>
                </HorizontalStack>
              </VerticalStack>
            </div>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card padding="400">
            <TextContainer>
              <Text variant="headingMd" as="h2" color="primary">Future Self-Service Settings</Text>
              <Box paddingBlockStart="200">
                <Text variant="bodyMd" as="p">
                  We're developing a self-service portal to allow you to manage your integration
                  settings directly. This feature will be available in a future update.
                </Text>
              </Box>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Settings;
