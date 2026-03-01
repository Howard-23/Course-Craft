import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import Rating from '@/components/ui/Rating';
import Skeleton from '@/components/ui/Skeleton';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@/components/ui/Tabs';
import styles from './page.module.css';

const selectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export default function StyleGuidePage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Style Guide</h1>
        <p className={styles.subtitle}>
          Design tokens and component documentation for CourseCraft
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Colors</h2>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-ink)' }} />
            <div className={styles.colorInfo}>
              <span className={styles.colorName}>Ink</span>
              <span className={styles.colorValue}>#1a1a2e</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-ink-light)' }} />
            <div className={styles.colorInfo}>
              <span className={styles.colorName}>Ink Light</span>
              <span className={styles.colorValue}>#4a4a68</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-paper)' }} />
            <div className={styles.colorInfo}>
              <span className={styles.colorName}>Paper</span>
              <span className={styles.colorValue}>#fafafa</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-paper-warm)' }} />
            <div className={styles.colorInfo}>
              <span className={styles.colorName}>Paper Warm</span>
              <span className={styles.colorValue}>#f5f3ef</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-amber)' }} />
            <div className={styles.colorInfo}>
              <span className={styles.colorName}>Amber</span>
              <span className={styles.colorValue}>#d4a373</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-amber-dark)' }} />
            <div className={styles.colorInfo}>
              <span className={styles.colorName}>Amber Dark</span>
              <span className={styles.colorValue}>#b08968</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-success)' }} />
            <div className={styles.colorInfo}>
              <span className={styles.colorName}>Success</span>
              <span className={styles.colorValue}>#6b9b7a</span>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div className={styles.colorSwatch} style={{ background: 'var(--color-error)' }} />
            <div className={styles.colorInfo}>
              <span className={styles.colorName}>Error</span>
              <span className={styles.colorValue}>#c97b7b</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Typography</h2>
        <div className={styles.typography}>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>Display</span>
            <span className={styles.typeSample} style={{ fontFamily: 'var(--font-display)' }}>
              Playfair Display
            </span>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>Body</span>
            <span className={styles.typeSample} style={{ fontFamily: 'var(--font-body)' }}>
              Source Sans 3
            </span>
          </div>
          <div className={styles.typeRow}>
            <span className={styles.typeLabel}>Mono</span>
            <span className={styles.typeSample} style={{ fontFamily: 'var(--font-mono)' }}>
              JetBrains Mono
            </span>
          </div>
        </div>
        <div className={styles.typeSizes}>
          <div className={styles.typeSizeRow}>
            <span style={{ fontSize: 'var(--text-6xl)', fontFamily: 'var(--font-display)' }}>
              Heading 1 - 60px
            </span>
          </div>
          <div className={styles.typeSizeRow}>
            <span style={{ fontSize: 'var(--text-5xl)', fontFamily: 'var(--font-display)' }}>
              Heading 2 - 48px
            </span>
          </div>
          <div className={styles.typeSizeRow}>
            <span style={{ fontSize: 'var(--text-4xl)', fontFamily: 'var(--font-display)' }}>
              Heading 3 - 36px
            </span>
          </div>
          <div className={styles.typeSizeRow}>
            <span style={{ fontSize: 'var(--text-3xl)', fontFamily: 'var(--font-display)' }}>
              Heading 4 - 30px
            </span>
          </div>
          <div className={styles.typeSizeRow}>
            <span>Body - 16px</span>
          </div>
          <div className={styles.typeSizeRow}>
            <span style={{ fontSize: 'var(--text-sm)' }}>Small - 14px</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Buttons</h2>
        <div className={styles.componentRow}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className={styles.componentRow}>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
        <div className={styles.componentRow}>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" isLoading>Loading</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cards</h2>
        <div className={styles.cardGrid}>
          <Card>Default Card</Card>
          <Card variant="elevated">Elevated Card</Card>
          <Card variant="interactive">Interactive Card</Card>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Form Elements</h2>
        <div className={styles.formGrid}>
          <Input label="Default Input" placeholder="Enter text..." />
          <Input label="With Icon" placeholder="Search..." leftIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>} />
          <Input label="Error Input" error="This field is required" />
          <Input label="Disabled Input" disabled value="Cannot edit" />
          <Select
            label="Select"
            options={selectOptions}
            value="option1"
            onChange={() => {}}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Badges</h2>
        <div className={styles.componentRow}>
          <Badge>Default</Badge>
          <Badge variant="amber">Amber</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Progress</h2>
        <div className={styles.componentColumn}>
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} showLabel />
          <Progress value={60} size="sm" showLabel />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Rating</h2>
        <div className={styles.componentColumn}>
          <Rating value={4.5} />
          <Rating value={3} size="sm" />
          <Rating value={5} size="lg" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skeleton</h2>
        <div className={styles.skeletonGrid}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="circular" width={48} height={48} />
          <Skeleton variant="rectangular" width="100%" height={120} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Accordion</h2>
        <Accordion>
          <AccordionItem id="item-1" title="What is CourseCraft?">
            <p>CourseCraft is a premium e-learning platform with courses taught by industry experts.</p>
          </AccordionItem>
          <AccordionItem id="item-2" title="How do I get started?">
            <p>Simply create an account, browse our course catalog, and start learning!</p>
          </AccordionItem>
          <AccordionItem id="item-3" title="Can I get a refund?">
            <p>Yes, we offer a 30-day money-back guarantee on all our courses.</p>
          </AccordionItem>
        </Accordion>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tabs</h2>
        <Tabs defaultTab="overview">
          <TabList>
            <Tab id="overview">Overview</Tab>
            <Tab id="curriculum">Curriculum</Tab>
            <Tab id="reviews">Reviews</Tab>
          </TabList>
          <TabPanels>
            <TabPanel id="overview">
              <p>This is the overview content. CourseCraft offers premium courses.</p>
            </TabPanel>
            <TabPanel id="curriculum">
              <p>The curriculum includes video lessons, exercises, and projects.</p>
            </TabPanel>
            <TabPanel id="reviews">
              <p>Our courses have been rated highly by thousands of students.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </div>
  );
}
