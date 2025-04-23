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

interface ThahravPasswordResetEmailProps {
    token: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

const getResetLink = (token: string) => {
    const url = new URL(`/reset-password/${token}`, baseUrl);
    return url.toString();
};

export const ThahravPasswordResetEmail = ({
    token,
}: ThahravPasswordResetEmailProps) => (
    <Html>
        <Head />
        <Body style={main}>
            <Preview>Reset your Thahrav account password.</Preview>
            <Container style={container}>
                <Img
                    src={`${baseUrl}/favicon.png`}
                    width={48}
                    height={48}
                    alt="Thahrav logo"
                />
                <Heading style={heading}>🔒 Reset your password</Heading>
                <Section style={body}>
                    <Text style={paragraph}>
                        Forgot your password? No worries. Just click the link below to reset it:
                    </Text>
                    <Text style={paragraph}>
                        <Link
                            style={link}
                            href={getResetLink(token)}
                            rel="noopener noreferrer"
                        >
                            👉 Click here to reset your password 👈
                        </Link>
                    </Text>
                    <Text style={paragraph}>
                        If you didn’t request this, you can safely ignore this email.
                    </Text>
                </Section>
                <Text style={paragraph}>
                    Stay safe,
                    <br />– Thahrav Team
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
                    alt="Thahrav logo"
                />
                <Text style={footer}>Vijaya Enterprises</Text>
                <Text style={footer}>Muzaffarpur, Bihar, India 842001</Text>
            </Container>
        </Body>
    </Html>
);

ThahravPasswordResetEmail.PreviewProps = {
    token: 'sample-reset-token-456xyz',
} as ThahravPasswordResetEmailProps;

export default ThahravPasswordResetEmail;

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
