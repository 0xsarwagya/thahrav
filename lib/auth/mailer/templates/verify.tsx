import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import React from 'react';

interface ThahravVerifyEmailProps {
    token: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

const getVerificationLink = (token: string) => {
    const url = new URL('/api/verify', baseUrl);
    url.searchParams.set('token', token);
    return url.toString();
};

export const ThahravVerifyEmail = ({
    token,
}: ThahravVerifyEmailProps) => (
    <Html>
        <Head />
        <Body style={main}>
            <Preview>Log in with this magic link.</Preview>
            <Container style={container}>
                <Img
                    src={`${baseUrl}/favicon.png`}
                    width={48}
                    height={48}
                    alt="Thahrav"
                />
                <Heading style={heading}>🚀 Your email verification link</Heading>
                <Section style={body}>
                    <Text style={paragraph}>
                        <Link style={link} href={getVerificationLink(token)}>
                            👉 Click here to verify your email 👈
                        </Link>
                    </Text>
                    <Text style={paragraph}>
                        If you didn't request this, please ignore this email.
                    </Text>
                </Section>
                <Text style={paragraph}>
                    Best,
                    <br />- Thahrav Team
                </Text>
                <Hr style={hr} />
                <Img
                    src={`${baseUrl}/favicon.png`}
                    width={32}
                    height={32}
                    style={{
                        WebkitFilter: 'grayscale(100%)',
                        filter: 'grayscale(100%)',
                        margin: '20px 0',
                    }}
                    alt='Thahrav'
                />
                <Text style={footer}>
                    Vijaya Enterprises
                </Text>
                <Text style={footer}>
                    Muzaffarpur, Bihar, India 842001
                </Text>
            </Container>
        </Body>
    </Html>
);

ThahravVerifyEmail.PreviewProps = {
    token: 'https://thahrav.shop/',
} as ThahravVerifyEmailProps;


const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 25px 48px',
    backgroundImage: 'url("/static/raycast-bg.png")',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat, no-repeat',
};

const heading = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: '48px',
};

const body = {
    margin: '24px 0',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
};

const link = {
    color: '#df8320',
};

const hr = {
    borderColor: '#dddddd',
    marginTop: '48px',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    marginLeft: '4px',
};
