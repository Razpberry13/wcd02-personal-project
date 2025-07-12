export interface Project {
    title: string;
    image: string;
    stack: string[];
    category: string;
    description: string;
    demoUrl?: string;
    codeUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      title: 'SmartWaste Analytics',
      image: '/assets/projects/6.jpg',
      stack: ['Python', 'Pandas', 'Streamlit'],
      category: 'Data Visualization',
      description:
        'Platform interaktif untuk menganalisis pola limbah kota menggunakan clustering dan time-series forecasting.',
    },
    {
      title: 'Student Performance Predictor',
      image: '/assets/projects/1.jpg',
      stack: ['Scikit-learn', 'XGBoost', 'FastAPI'],
      category: 'Machine Learning',
      description:
        'Model regresi yang memprediksi performa akademik berdasarkan kebiasaan, demografi, dan sumber daya sekolah.',
    },
    {
      title: 'Disease Spread Simulator',
      image: '/assets/projects/4.jpg',
      stack: ['Python', 'NetworkX', 'Matplotlib'],
      category: 'Network Modeling',
      description:
        'Simulator berbasis graph theory untuk visualisasi penyebaran penyakit di komunitas terhubung.',
    },
  ];
  