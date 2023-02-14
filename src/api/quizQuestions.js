// briggs: EI, SN, TF, JP
// color: brown, green, blue, red
// letter: a, b, c, d
var quizQuestions = [
  // question #1
  {
    question: 'Is spending hours and hours on social media advisible?',
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'YEP! THAT IS OKAY'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'J,Brown,D,No',
        content: "NO"
      }
    ]
  },
  // question #2
  {
    question: 'Does social media negatively impact wellbeing?',
    answers: [
      {
        // briggs, color, letter
        type: 'N,Green,C',
        content: 'YEP! '
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'N,Green,C,No',
        content: "NAH!"
      }
    ]
  },
  // question #3
  {
    question: 'Does Social Media benefit us?',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Red,A',
        content: 'YES'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'S,Red,A,No',
        content: "NO!"
      }
    ]
  },
  // question #4
  {
    question: "Have you ever deleted a post because it hasn&#39;t received &#39;enough&#39; likes?",
    answers: [
      {
        // briggs, color, letter
        type: 'J,Brown,D',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'J,Brown,D,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #5
  {
    question: 'Do you think social media platforms are doing enough to tackle the issue of mental health? (e.g:Instagram removing likes from pictures etc)',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Brown,C',
        content: 'YEP! '
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'T,Brown,C,No',
        content: "NAH!"
      }
    ]
  },
  // question #6
  {
    question: 'Does social media influence your behaviour and actions?',
    answers: [
      {
        // briggs, color, letter
        type: 'I,f,C',
        content: 'YEP! It surely does!'
      },
      {
        type: ' ',
        content: 'Not to a larger extent'
      },
      {
        type: 'I,Green,C,No',
        content: "Not at all! I just ignore what is happening on social media"
      }
    ]
  },
  // question #7
  {
    question: 'I post my daily and timely updates on social media?',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'E,Blue,B,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #8
  {
    question: 'The first thing that I check in the morning is social media',
    answers: [
      {
        // briggs, color, letter
        type: 'E,Blue,B',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'E,Blue,B,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #9
  {
    question: 'I always compare myslef with the people I follow',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'F,Blue,B,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #10
  {
    question: 'Does the content on social media encourage you to be a better version of yourself?',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'YEP! It does'
      },
      {
        type: ' ',
        content: 'Sometimes'
      },
      {
        type: 'P,Red,A,No',
        content: "Not at all"
      }
    ]
  },
  // question #11
  {
    question: 'The best way to connect with people is social media',
    answers: [
      {
        // briggs, color, letter
        type: 'P,Red,A',
        content: 'YEP! '
      },
      {
        type: ' ',
        content: 'Sometimes'
      },
      {
        type: 'P,Red,A,No',
        content: "No"
      }
    ]
  },
  // question #12
  {
    question: 'Since the pandemic, I often feel depressed,sad,anxious',
    answers: [
      {
        // briggs, color, letter
        type: 'S,Brown,C',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'S,Brown,C,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #13
  {
    question: 'It was really tough to catch up on studies during the pandemic times',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,C',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'T,Green,C,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #14
  {
    question: 'Online is boring, better switch to offline mode',
    answers: [
      {
        // briggs, color, letter
        type: 'T,Green,C',
        content: 'YEP! THAT IS ME!'
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'T,Green,C,No',
        content: "NAH, THAT CAN'T BE ME!"
      }
    ]
  },
  // question #15
  {
    question: 'Covid-19 has impacted my studies/learning ability',
    answers: [
      {
        // briggs, color, letter
        type: 'F,Blue,B',
        content: 'YEP! '
      },
      {
        type: ' ',
        content: 'I HAVE NO IDEA!'
      },
      {
        type: 'F,Blue,B,No',
        content: "NAH!"
      }
    ]
  }
]

export default quizQuestions
