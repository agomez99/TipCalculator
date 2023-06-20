import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numPeople, setNumPeople] = useState(1);

  const handleCustomTip = () => {
    const customTip = prompt('Enter custom tip percentage');
    if (customTip !== null) {
      setTipPercentage(parseFloat(customTip));
    } else {
      reset();
    }
  };

  const reset = () => {
    setBillAmount(0);
    setTipPercentage(0);
    setNumPeople(1);
  };

  const totalTipAmount = () => {
    let total = (billAmount * tipPercentage) / 100;
    return total.toFixed(2);
  };

  const totalAmountPerPerson = () => {
    let total = (billAmount / numPeople) + ((billAmount * tipPercentage) / (100 * numPeople));
    return total.toFixed(2);
  };

  return (
    <>
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
      </Head>
      <Container fluid className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Image src='/images/logo.svg' width={70} height={70} />
          </h1>

          <Card className={styles.card}>
            <Row>
              <Col md={6} sm={12} className={styles.tipAmount}>
                <Form>
                  <Form.Group className='mb-3' controlId='formBill'>
                    <Form.Label>Bill</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='$'
                      id='billAmount'
                      value={billAmount}
                      style={{ width: '100%', height: '50px' }}
                      onChange={(e) => setBillAmount(e.target.value)}
                    />
                  </Form.Group>
                  <p>Select Tip %</p>

                  <div className={styles.tipButtons}>
                    {[5, 10, 15, 25, 50].map((tip) => (
                      <Button
                        key={tip}
                        className={styles.button}
                        onClick={() => setTipPercentage(tip)}
                      >
                        {`${tip}%`}
                      </Button>
                    ))}
                    <Button className={styles.button} onClick={handleCustomTip}>
                      Custom
                    </Button>
                  </div>

                  <Form.Group controlId='formNumPeople'>
                    <Form.Label>Number of People</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder=""
                      id=''
                      value={numPeople}
                      onChange={(e) => setNumPeople(e.target.value)}
                      className={styles.input}
                      style={{ width: '100%', height: '50px' }}
                      min={1}
                      max={100}
                      step={1}
                      required
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col md={6} sm={12}>
                <div className={styles.totalAmount}>
                  <p>Total ${billAmount + ((billAmount * tipPercentage) / 100)}</p>
                  <div className={styles.tipText}>
                    <p>Tip Amount</p>
                    <p>/ per person</p>
                    <p className={styles.tipPersonText}>{(totalTipAmount() / numPeople).toFixed(2)}</p>
                  </div>
                  <p className={styles.tipText}>
                    Total / per Person <span className={styles.totalPersonText}>{(totalAmountPerPerson())}</span>
                  </p>
                  <Button
                    className={styles.button}
                    onClick={reset}
                    style={{ width: '90%' }}
                  >
                    RESET
                  </Button>
                </div>
              </Col>

            </Row>
          </Card>
        </main>
      </Container>
    </>
  );
}
;




