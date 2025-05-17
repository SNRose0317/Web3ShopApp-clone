import React from 'react';
import { 
  Page, 
  Card, 
  Layout, 
  TextContainer, 
  Text, 
  Banner, 
  Link,
  Box,
  Grid,
  List
} from '@shopify/polaris';
import Logo from '../components/Logo';

const Dashboard = () => {
  return (
    <Page 
      title="Web3 Diagnostics Lab Integration" 
      primaryAction={{content: 'Manual setup guide', url: '/instructions'}}
    >
      <Layout>
        <Layout.Section>
          <Card padding="400">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Logo height={60} width={280} whiteText={false} />
              </div>
              
              <Banner
                title="Welcome to your Web3 Diagnostics Lab Integration platform"
                status="info"
              >
                <Text variant="bodyMd" as="p">
                  This app connects your Evexia Diagnostics account with your Shopify store,
                  allowing you to easily offer lab tests to your patients.
                </Text>
              </Banner>
            </div>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Grid>
            <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 4, lg: 4, xl: 4}}>
              <Card padding="400">
                <TextContainer>
                  <Text variant="headingMd" as="h2">Connection Status</Text>
                  <Box paddingBlockEnd="400">
                    <Text variant="bodyMd" as="p" color="success">Connected to Evexia Diagnostics</Text>
                  </Box>
                  <Text variant="bodyMd" as="p">
                    Your lab integration service is properly connected to your Evexia
                    Diagnostics account and ready to process orders.
                  </Text>
                </TextContainer>
              </Card>
            </Grid.Cell>

            <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 4, lg: 4, xl: 4}}>
              <Card padding="400">
                <TextContainer>
                  <Text variant="headingMd" as="h2">Service Overview</Text>
                  <Text variant="bodyMd" as="p">
                    Our lab integration service automates the connection between your
                    Shopify store and Evexia Diagnostics to streamline the lab ordering process.
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Lab tests purchased through your store are automatically submitted 
                    to Evexia under your account, and results are returned to your patients.
                  </Text>
                </TextContainer>
              </Card>
            </Grid.Cell>

            <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 4, lg: 4, xl: 4}}>
              <Card padding="400">
                <TextContainer>
                  <Text variant="headingMd" as="h2">Quick Links</Text>
                  <List type="bullet">
                    <List.Item>
                      <Link url="/instructions">Setup Instructions</Link>
                    </List.Item>
                    <List.Item>
                      <Link url="/support">Support & FAQ</Link>
                    </List.Item>
                    <List.Item>
                      <Link url="/settings">Account Settings</Link>
                    </List.Item>
                  </List>
                </TextContainer>
              </Card>
            </Grid.Cell>
          </Grid>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Dashboard;
