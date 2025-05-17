import React, { useState } from 'react';
import { 
  Page, 
  Card, 
  Layout, 
  TextContainer, 
  Text, 
  Link,
  Box,
  Icon,
  Collapsible,
  Button
} from '@shopify/polaris';
import { EmailMajor, QuestionMarkMajor, PhoneMajor } from '@shopify/polaris-icons';
import Logo from '../components/Logo';

const Support: React.FC = () => {
  // State for FAQ collapsible sections
  const [open, setOpen] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
  });

  const toggleFaq = (id: keyof typeof open) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Page 
      title="Support & FAQ"
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
                <Text variant="headingMd" as="h2">Contact Information</Text>
                <Box paddingBlockStart="400">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ marginRight: '12px' }}>
                      <Icon source={EmailMajor} color="base" />
                    </div>
                      <Text variant="bodyMd" as="p">
                        <strong>Email:</strong> <Link url="mailto:Support@Web3Diagnostics.com" monochrome>Support@Web3Diagnostics.com</Link>
                      </Text>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ marginRight: '12px' }}>
                      <Icon source={PhoneMajor} color="base" />
                    </div>
                      <Text variant="bodyMd" as="p">
                        <strong>Phone:</strong> <Link url="tel:+18005551234" monochrome>1-800-555-1234</Link>
                      </Text>
                  </div>
                </Box>
              </TextContainer>
            </div>
            
            <div style={{ padding: '16px' }}>
              <TextContainer>
                <Text variant="headingMd" as="h3">Support Hours</Text>
                <Text variant="bodyMd" as="p">
                  Monday - Friday: 9:00 AM - 5:00 PM Eastern Time
                </Text>
                <Text variant="bodyMd" as="p">
                  Emails received outside of business hours will be addressed on the next business day.
                </Text>
              </TextContainer>
            </div>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <div style={{ padding: '16px' }}>
              <TextContainer>
                <Text variant="headingMd" as="h2">Frequently Asked Questions</Text>
              </TextContainer>
            </div>
            
            <div style={{ padding: '16px', borderTop: '1px solid #E1E3E5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '12px' }}>
                    <Icon source={QuestionMarkMajor} color="highlight" />
                  </div>
                  <Text variant="headingSm" as="h3">How do I connect my Evexia account?</Text>
                </div>
                <Button 
                  plain 
                  onClick={() => toggleFaq('faq1')}
                  ariaExpanded={open.faq1}
                  ariaControls="faq1"
                >
                  {open.faq1 ? 'Collapse' : 'Expand'}
                </Button>
              </div>
              <Collapsible
                open={open.faq1}
                id="faq1"
              >
                <Box paddingBlockStart="400">
                  <Text variant="bodyMd" as="p">
                    Currently, we handle the connection process manually. Please contact our
                    support team with your Evexia account information, and we'll set up the
                    integration for you. In the future, we plan to offer a self-service
                    option for account connections.
                  </Text>
                </Box>
              </Collapsible>
            </div>
            
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '12px' }}>
                    <Icon source={QuestionMarkMajor} color="base" />
                  </div>
                  <Text variant="headingSm" as="h3">How are lab tests mapped to Shopify products?</Text>
                </div>
                <Button 
                  plain 
                  onClick={() => toggleFaq('faq2')}
                  ariaExpanded={open.faq2}
                  ariaControls="faq2"
                >
                  {open.faq2 ? 'Collapse' : 'Expand'}
                </Button>
              </div>
              <Collapsible
                open={open.faq2}
                id="faq2"
              >
                <Box paddingBlockStart="400">
                  <Text variant="bodyMd" as="p">
                    We map your Shopify products to the corresponding lab tests in Evexia
                    based on SKU or product code. Our team will work with you to ensure
                    proper mapping during the setup process. When a customer purchases a
                    product, our system identifies the corresponding lab test in Evexia.
                  </Text>
                </Box>
              </Collapsible>
            </div>
            
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '12px' }}>
                    <Icon source={QuestionMarkMajor} color="base" />
                  </div>
                  <Text variant="headingSm" as="h3">How do patients receive their lab results?</Text>
                </div>
                <Button 
                  plain 
                  onClick={() => toggleFaq('faq3')}
                  ariaExpanded={open.faq3}
                  ariaControls="faq3"
                >
                  {open.faq3 ? 'Collapse' : 'Expand'}
                </Button>
              </div>
              <Collapsible
                open={open.faq3}
                id="faq3"
              >
                <Box paddingBlockStart="400">
                  <Text variant="bodyMd" as="p">
                    When lab results become available in your Evexia account, our system
                    automatically retrieves them and sends a notification to the patient.
                    Patients can access their results through a secure portal using the
                    credentials they receive after purchase.
                  </Text>
                </Box>
              </Collapsible>
            </div>

            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '12px' }}>
                    <Icon source={QuestionMarkMajor} color="base" />
                  </div>
                  <Text variant="headingSm" as="h3">What is the 30% markup and how does it work?</Text>
                </div>
                <Button 
                  plain 
                  onClick={() => toggleFaq('faq4')}
                  ariaExpanded={open.faq4}
                  ariaControls="faq4"
                >
                  {open.faq4 ? 'Collapse' : 'Expand'}
                </Button>
              </div>
              <Collapsible
                open={open.faq4}
                id="faq4"
              >
                <Box paddingBlockStart="400">
                  <Text variant="bodyMd" as="p">
                    Our integration service adds a 30% markup to the base cost of lab tests from
                    Evexia Diagnostics. This fee covers the cost of our integration platform,
                    automation services, and patient result delivery. For example, if a lab test
                    costs $100 from Evexia, your cost would be $130 through our service. You can
                    then set your own retail pricing in your Shopify store.
                  </Text>
                </Box>
              </Collapsible>
            </div>

            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '12px' }}>
                    <Icon source={QuestionMarkMajor} color="base" />
                  </div>
                  <Text variant="headingSm" as="h3">Can I customize the patient instructions?</Text>
                </div>
                <Button 
                  plain 
                  onClick={() => toggleFaq('faq5')}
                  ariaExpanded={open.faq5}
                  ariaControls="faq5"
                >
                  {open.faq5 ? 'Collapse' : 'Expand'}
                </Button>
              </div>
              <Collapsible
                open={open.faq5}
                id="faq5"
              >
                <Box paddingBlockStart="400">
                  <Text variant="bodyMd" as="p">
                    Yes, we can customize the instructions that patients receive for their lab
                    tests. Please contact our support team with your specific requirements, and
                    we'll work with you to implement custom instructions for your patients.
                  </Text>
                </Box>
              </Collapsible>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Support;
