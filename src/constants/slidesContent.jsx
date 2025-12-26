import React from 'react';
import coverBg from '../assets/cover-bg.png';
import { BarChart, DoughnutChart, RadarChart, HorizontalBarChart } from '../components/Charts';

const MATURITY_LEVELS = [
  {
    "level": 1,
    "technology": "Basic OCR",
    "metrics": [
      {
        "metric": "Accuracy (CAR) & Error (CER)",
        "benchmark": "CAR > 90% (CER < 10%)",
        "meaning": "Scan lưu trữ, tra cứu cơ bản."
      },
      {
        "metric": "Word Accuracy (WAR) & Error (WER)",
        "benchmark": "WAR > 85% (WER < 15%)",
        "meaning": "Giảm nhập liệu tay với văn bản."
      },
      {
        "metric": "Processing Speed",
        "benchmark": "1-2 trang/giây",
        "meaning": "Khả năng xử lý khối lượng lớn."
      }
    ]
  },
  {
    "level": 2,
    "technology": "Template-based OCR",
    "metrics": [
      {
        "metric": "Field-level Accuracy",
        "benchmark": ">90% trên form cố định",
        "meaning": "Trích xuất thông tin CCCD, điện/nước."
      },
      {
        "metric": "Form-level Success Rate",
        "benchmark": ">85%",
        "meaning": "Đảm bảo hồ sơ eKYC đi thẳng."
      },
      {
        "metric": "Rejection Rate",
        "benchmark": "<10%",
        "meaning": "Giảm workload nhập tay."
      }
    ]
  },
  {
    "level": 3,
    "technology": "AI-powered OCR/NLP",
    "metrics": [
      {
        "metric": "Field-level Accuracy (chữ tay + in)",
        "benchmark": "80-90%",
        "meaning": "Hợp đồng, đơn vay có chữ ký."
      },
      {
        "metric": "Document Classification Accuracy",
        "benchmark": ">90%",
        "meaning": "Tự phân loại tài liệu (hợp đồng, sổ đỏ...)."
      },
      {
        "metric": "Manual Intervention Rate",
        "benchmark": "<5-8%",
        "meaning": "Tăng tự động hóa LOS/Bank."
      }
    ]
  },
  {
    "level": 4,
    "technology": "OCR + GenAI (Doc Understanding)",
    "metrics": [
      {
        "metric": "Information Extraction F1",
        "benchmark": ">0.80",
        "meaning": "Trích xuất điều khoản, số liệu."
      },
      {
        "metric": "QA Accuracy on Docs",
        "benchmark": ">75%",
        "meaning": "Chatbot QA trên hợp đồng."
      },
      {
        "metric": "Summarization Quality (ROUGE-L)",
        "benchmark": "0.5-0.6",
        "meaning": "Tóm tắt hợp đồng tín dụng."
      }
    ]
  },
  {
    "level": 5,
    "technology": "OCR + VLM (Agentic OCR)",
    "metrics": [
      {
        "metric": "Multi-hop QA Accuracy",
        "benchmark": ">70%",
        "meaning": "Trả lời câu hỏi suy luận phức tạp."
      },
      {
        "metric": "Hallucination Rate",
        "benchmark": "<5%",
        "meaning": "Giảm rủi ro pháp lý khi AI tự chế."
      },
      {
        "metric": "Automation Rate",
        "benchmark": ">80% E2E",
        "meaning": "Hồ sơ vay được xử lý hoàn toàn tự động."
      }
    ]
  }
];
const MATURITY_TABLE_ROWS = [
  {
    "level": "Level 1",
    "tech": "Basic OCR",
    "metric": "Character Accuracy Rate (CAR)",
    "bench": "85-90% (text rõ ràng)",
    "meaning": "Scan lưu trữ, tra cứu cơ bản."
  },
  {
    "level": "",
    "tech": "",
    "metric": "Word Accuracy Rate (WAR)",
    "bench": "80-85%",
    "meaning": "Giảm nhập liệu tay với văn bản."
  },
  {
    "level": "",
    "tech": "",
    "metric": "Processing Speed",
    "bench": "1-2 trang/giây",
    "meaning": "Khả năng xử lý khối lượng lớn."
  },
  {
    "level": "Level 2",
    "tech": "Template-based OCR",
    "metric": "Field-level Accuracy",
    "bench": ">90% trên form cố định",
    "meaning": "Trích xuất thông tin CCCD, điện/nước."
  },
  {
    "level": "",
    "tech": "",
    "metric": "Form-level Success Rate",
    "bench": ">85%",
    "meaning": "Đảm bảo hồ sơ eKYC đi thẳng."
  },
  {
    "level": "",
    "tech": "",
    "metric": "Rejection Rate",
    "bench": "<10%",
    "meaning": "Giảm workload nhập tay."
  },
  {
    "level": "Level 3",
    "tech": "AI-powered OCR/NLP",
    "metric": "Field-level Accuracy (chữ tay + in)",
    "bench": "80-90%",
    "meaning": "Hợp đồng, đơn vay có chữ ký."
  },
  {
    "level": "",
    "tech": "",
    "metric": "Document Classification Accuracy",
    "bench": ">90%",
    "meaning": "Tự phân loại tài liệu (hợp đồng, sổ đỏ...)."
  },
  {
    "level": "",
    "tech": "",
    "metric": "Manual Intervention Rate",
    "bench": "<5-8%",
    "meaning": "Tăng tự động hóa LOS/Bank."
  },
  {
    "level": "Level 4",
    "tech": "OCR + GenAI (Doc Understanding)",
    "metric": "Information Extraction F1",
    "bench": ">0.80",
    "meaning": "Trích xuất điều khoản, số liệu."
  },
  {
    "level": "",
    "tech": "",
    "metric": "QA Accuracy on Docs",
    "bench": ">75%",
    "meaning": "Chatbot QA trên hợp đồng."
  },
  {
    "level": "",
    "tech": "",
    "metric": "Summarization Quality (ROUGE-L)",
    "bench": "0.5-0.6",
    "meaning": "Tóm tắt hợp đồng tín dụng."
  },
  {
    "level": "Level 5",
    "tech": "OCR + VLM (Agentic OCR)",
    "metric": "Multi-hop QA Accuracy",
    "bench": ">70%",
    "meaning": "Trả lời câu hỏi suy luận phức tạp."
  },
  {
    "level": "",
    "tech": "",
    "metric": "Hallucination Rate",
    "bench": "<5%",
    "meaning": "Giảm rủi ro pháp lý khi AI tự chế."
  },
  {
    "level": "",
    "tech": "",
    "metric": "Automation Rate",
    "bench": ">80% E2E",
    "meaning": "Hồ sơ vay được xử lý hoàn toàn tự động."
  }
];
const ENGINE_ALLOC = [
  {
    "engine": "---",
    "docs": "---"
  },
  {
    "engine": "In-House (AIEP)",
    "docs": "Điều lệ doanh nghiệp, Quy chế tài chính/nội bộ, Thỏa thuận cấp bảo lãnh, HĐLĐ/Quyết định làm việc."
  },
  {
    "engine": "VNG Cloud",
    "docs": "Sổ sách chứng từ nhập/bán hàng, Hóa đơn, Báo cáo tài chính, Văn bản hành chính (Quyết định/Thông báo), Khế ước nhận nợ."
  },
  {
    "engine": "Finetune In-House",
    "docs": "CCCD, Giấy tờ nhà đất, BB đánh giá tài sản (vì chứa thông tin nhạy cảm PII và theo template đặc thù)."
  }
];

const INHOUSE_WORD_DONUT_DATA = {
  "labels": [
    "Word Correct (WAR)",
    "Word Error (WER)"
  ],
  "datasets": [
    {
      "data": [
        88.87,
        11.13
      ],
      "backgroundColor": [
        "rgba(240,110,29,0.9)",
        "rgba(228,30,38,0.85)"
      ],
      "borderWidth": 0
    }
  ]
};
const VNG_WORD_DONUT_DATA = {
  "labels": [
    "Word Correct (WAR)",
    "Word Error (WER)"
  ],
  "datasets": [
    {
      "data": [
        92.77,
        7.23
      ],
      "backgroundColor": [
        "rgba(25,135,84,0.85)",
        "rgba(228,30,38,0.85)"
      ],
      "borderWidth": 0
    }
  ]
};
const INHOUSE_QUALITY_BAR_DATA = {
  "labels": [
    "WAR",
    "CAR",
    "Rejection",
    "WER",
    "CER"
  ],
  "datasets": [
    {
      "label": "In-House (AIEP)",
      "data": [
        88.87,
        81.24,
        6.66,
        11.13,
        18.76
      ],
      "backgroundColor": [
        "rgba(228,30,38,0.75)",
        "rgba(228,30,38,0.75)",
        "rgba(228,30,38,0.75)",
        "rgba(228,30,38,0.75)",
        "rgba(228,30,38,0.75)"
      ],
      "borderRadius": 10
    }
  ]
};
const VNG_QUALITY_BAR_DATA = {
  "labels": [
    "WAR",
    "CAR",
    "Rejection",
    "WER",
    "CER"
  ],
  "datasets": [
    {
      "label": "VNG Cloud",
      "data": [
        92.77,
        93.64,
        11.35,
        7.23,
        6.36
      ],
      "backgroundColor": [
        "rgba(240,110,29,0.75)",
        "rgba(240,110,29,0.75)",
        "rgba(240,110,29,0.75)",
        "rgba(240,110,29,0.75)",
        "rgba(240,110,29,0.75)"
      ],
      "borderRadius": 10
    }
  ]
};
const RADAR_COMPARE_DATA = {
  "labels": [
    "WAR ↑",
    "CAR ↑",
    "Rejection ↓",
    "WER ↓",
    "CER ↓"
  ],
  "datasets": [
    {
      "label": "In-House (AIEP)",
      "data": [
        8.89,
        8.12,
        9.33,
        8.89,
        8.12
      ],
      "backgroundColor": "rgba(228,30,38,0.18)",
      "borderColor": "rgba(228,30,38,0.9)",
      "pointBackgroundColor": "rgba(228,30,38,0.9)"
    },
    {
      "label": "VNG Cloud",
      "data": [
        9.28,
        9.36,
        8.87,
        9.28,
        9.36
      ],
      "backgroundColor": "rgba(240,110,29,0.18)",
      "borderColor": "rgba(240,110,29,0.9)",
      "pointBackgroundColor": "rgba(240,110,29,0.9)"
    }
  ]
};
const IN_DOC_WER_DATA = {
  "labels": ["Hóa đơn", "Sao kê", "GCN QSDĐ", "CCCD", "Hợp đồng", "Khế ước", "HĐLĐ", "Lệnh chuyển tiền", "Điều lệ", "BCTC"],
  "datasets": [
    {
      "label": "WER (In-House) - Thấp hơn là tốt hơn",
      "data": [405.08, 115.03, 96.60, 74.15, 57.05, 53.31, 48.42, 28.52, 18.37, 6.49],
      "backgroundColor": [
        "#991b1b", // Critical - Dark Red
        "#991b1b",
        "#b91c1c", // Critical
        "#ef4444", // Poor
        "#f97316", // Concerning
        "#f97316",
        "#f97316",
        "#eab308", // Acceptable
        "#22c55e", // Good
        "#22c55e"
      ],
      "borderRadius": 4
    }
  ]
};
const VNG_DOC_WER_DATA = {
  "labels": ["GCN QSDĐ", "HĐLĐ", "Hợp đồng", "BCTC", "CCCD", "Lệnh chuyển tiền", "Điều lệ", "Khế ước"],
  "datasets": [
    {
      "label": "WER (VNG Cloud) - Thấp hơn là tốt hơn",
      "data": [14.33, 7.89, 7.85, 6.49, 4.51, 1.99, 1.97, 1.56],
      "backgroundColor": [
        "#f97316", // Variable
        "#22c55e", // Good
        "#22c55e",
        "#22c55e",
        "#22c55e",
        "#3b82f6", // Excellent
        "#3b82f6",
        "#3b82f6"
      ],
      "borderRadius": 4
    }
  ]
};
const BENCH_MIN_DATA = {
  "labels": [
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
    "Level 5"
  ],
  "datasets": [
    {
      "label": "Ngưỡng benchmark tối thiểu (quy đổi % khi cần)",
      "data": [
        85.0,
        90.0,
        90.0,
        80.0,
        70.0
      ],
      "backgroundColor": [
        "rgba(240,110,29,0.75)",
        "rgba(240,110,29,0.75)",
        "rgba(240,110,29,0.75)",
        "rgba(240,110,29,0.75)",
        "rgba(240,110,29,0.75)"
      ],
      "borderRadius": 10
    }
  ]
};

const OCRConceptVisual = () => (
  <div style={{height: '100%', display: 'flex', flexDirection: 'column', gap: '24px'}}>
    {/* Definition Box */}
    <div className="card" style={{padding: '28px', display: 'flex', alignItems: 'center', gap: '32px', background: 'linear-gradient(135deg, #fff, #fff7ed)', borderLeft: '6px solid var(--msb-orange)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'}}>
      <div style={{width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(240,110,29,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <i className="fas fa-eye" style={{fontSize: '40px', color: 'var(--msb-orange)'}}></i>
      </div>
      <div>
        <h3 style={{margin: '0 0 12px 0', color: '#111827', fontSize: '1.8rem', fontWeight: '800'}}>Optical Character Recognition (OCR)</h3>
        <div style={{fontSize: '20px', color: '#374151', lineHeight: '1.6'}}>
          Công nghệ chuyển đổi tài liệu phi cấu trúc (ảnh, scan, PDF) thành dữ liệu số hóa. <br/>
          Đây là <strong style={{color: 'var(--msb-orange)'}}>"cổng vào dữ liệu"</strong> (Data Entry Gate) tiên quyết cho tự động hóa.
        </div>
      </div>
    </div>

    {/* Process Flow Grid */}
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', flex: 1, minHeight: 0}}>
      {/* Input Layer */}
      <div className="card" style={{padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid #e5e7eb', height: '100%'}}>
        <div style={{padding: '20px', background: '#f8fafc', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '15px'}}>
           <div style={{background: '#64748b', color: 'white', fontWeight: 'bold', padding: '6px 14px', borderRadius: '8px', fontSize: '15px'}}>STEP 01</div>
           <div style={{fontWeight: '700', color: '#475569', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Input Layer</div>
        </div>
        <div style={{padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <div style={{width: '80px', height: '80px', background: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'}}>
            <i className="fas fa-file-import" style={{fontSize: '36px', color: '#64748b'}}></i>
          </div>
          <h4 style={{margin: '0 0 20px 0', textAlign: 'center', color: '#1e293b', fontSize: '1.5rem', fontWeight: '700'}}>Dữ liệu đầu vào</h4>
          <ul style={{margin: 0, paddingLeft: '20px', fontSize: '17px', color: '#4b5563', lineHeight: '1.6', width: '100%'}}>
            <li style={{marginBottom: '10px'}}>Scan / Photocopy</li>
            <li style={{marginBottom: '10px'}}>Ảnh chụp (Mobile App)</li>
            <li style={{marginBottom: '10px'}}>File PDF/Image upload</li>
            <li>Chứng từ giấy đa dạng</li>
          </ul>
        </div>
      </div>

      {/* Core Engine */}
      <div className="card" style={{padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid #fed7aa', boxShadow: '0 10px 25px -5px rgba(240, 110, 29, 0.15)', transform: 'scale(1.03)', zIndex: 10, height: '100%'}}>
        <div style={{padding: '20px', background: '#fff7ed', borderBottom: '1px solid #fed7aa', display: 'flex', alignItems: 'center', gap: '15px'}}>
           <div style={{background: 'var(--msb-orange)', color: 'white', fontWeight: 'bold', padding: '6px 14px', borderRadius: '8px', fontSize: '15px'}}>STEP 02</div>
           <div style={{fontWeight: '700', color: '#c2410c', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Core Engine</div>
        </div>
        <div style={{padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <div style={{width: '80px', height: '80px', background: 'rgba(240, 110, 29, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'}}>
            <i className="fas fa-microchip" style={{fontSize: '36px', color: 'var(--msb-orange)'}}></i>
          </div>
          <h4 style={{margin: '0 0 20px 0', textAlign: 'center', color: '#1e293b', fontSize: '1.5rem', fontWeight: '700'}}>Xử lý thông minh</h4>
          <ul style={{margin: 0, paddingLeft: '20px', fontSize: '17px', color: '#4b5563', lineHeight: '1.6', width: '100%'}}>
            <li style={{marginBottom: '10px'}}><strong>Pre-processing:</strong> Khử nhiễu</li>
            <li style={{marginBottom: '10px'}}><strong>OCR:</strong> Nhận diện ký tự</li>
            <li style={{marginBottom: '10px'}}><strong>Extraction:</strong> Trích xuất</li>
            <li><strong>Classification:</strong> Phân loại</li>
          </ul>
        </div>
      </div>

      {/* Downstream */}
      <div className="card" style={{padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid #fecaca', height: '100%'}}>
        <div style={{padding: '20px', background: '#fef2f2', borderBottom: '1px solid #fecaca', display: 'flex', alignItems: 'center', gap: '15px'}}>
           <div style={{background: 'var(--msb-red)', color: 'white', fontWeight: 'bold', padding: '6px 14px', borderRadius: '8px', fontSize: '15px'}}>STEP 03</div>
           <div style={{fontWeight: '700', color: '#b91c1c', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Downstream</div>
        </div>
        <div style={{padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <div style={{width: '80px', height: '80px', background: 'rgba(228, 30, 38, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px'}}>
            <i className="fas fa-network-wired" style={{fontSize: '36px', color: 'var(--msb-red)'}}></i>
          </div>
          <h4 style={{margin: '0 0 20px 0', textAlign: 'center', color: '#1e293b', fontSize: '1.5rem', fontWeight: '700'}}>Giá trị nghiệp vụ</h4>
          <ul style={{margin: 0, paddingLeft: '20px', fontSize: '17px', color: '#4b5563', lineHeight: '1.6', width: '100%'}}>
            <li style={{marginBottom: '10px'}}>Tự động nhập liệu (eKYC)</li>
            <li style={{marginBottom: '10px'}}>Giảm rủi ro sai sót</li>
            <li style={{marginBottom: '10px'}}>Tăng tốc độ xử lý (SLA)</li>
            <li>Truy vết & Kiểm soát</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const MaturityTable = () => (
  <div className="card" style={{height:'100%', display:'flex', flexDirection:'column', minHeight:0, padding: 0, overflow: 'hidden'}}>
    <div style={{padding:'16px 20px', borderBottom: '1px solid #e5e7eb', backgroundColor: '#fffaf5'}}>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <div style={{width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(240,110,29,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
           <i className="fas fa-layer-group" style={{fontSize:20, color:'var(--msb-orange)'}}></i>
        </div>
        <div>
            <div style={{fontWeight:700, fontSize: '1.2rem', color: '#111827'}}>Khung 5 cấp độ trưởng thành OCR</div>
            <div style={{fontSize:14, color:'#6b7280', marginTop:2}}>Tiêu chuẩn đánh giá từ Basic OCR đến Agentic OCR</div>
        </div>
      </div>
    </div>
    <div style={{flex:1, minHeight:0, overflow:'auto'}}>
      <table className="clean-table" style={{fontSize:14, width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb'}}>
            <th style={{width:'8%', padding: '10px 12px', textAlign: 'center', borderRight: '1px solid #e5e7eb', color: '#374151'}}>Cấp độ</th>
            <th style={{width:'18%', padding: '10px 12px', borderRight: '1px solid #e5e7eb', color: '#374151'}}>Công nghệ</th>
            <th style={{width:'25%', padding: '10px 12px', borderRight: '1px solid #e5e7eb', color: '#374151'}}>Metric chính</th>
            <th style={{width:'15%', padding: '10px 12px', borderRight: '1px solid #e5e7eb', color: '#374151'}}>Benchmark</th>
            <th style={{padding: '10px 12px', color: '#374151'}}>Ý nghĩa nghiệp vụ</th>
          </tr>
        </thead>
        <tbody>
          {MATURITY_LEVELS.map((lvl, i) => (
            <React.Fragment key={i}>
              {lvl.metrics.map((m, j) => (
                <tr key={j} style={{borderBottom: '1px solid #e5e7eb'}}>
                  {j === 0 && (
                    <td rowSpan={lvl.metrics.length} style={{fontWeight:800, color:'var(--msb-red)', textAlign: 'center', verticalAlign: 'middle', borderRight: '1px solid #e5e7eb', backgroundColor: '#fff'}}>
                      Level {lvl.level}
                    </td>
                  )}
                  {j === 0 && (
                    <td rowSpan={lvl.metrics.length} style={{fontWeight:600, color: '#111827', verticalAlign: 'middle', borderRight: '1px solid #e5e7eb', backgroundColor: '#fff'}}>
                      {lvl.technology}
                    </td>
                  )}
                  <td style={{padding: '8px 12px', color: '#374151', borderRight: '1px solid #e5e7eb'}}><strong>{m.metric}</strong></td>
                  <td style={{padding: '8px 12px', whiteSpace:'nowrap', color: '#4b5563', borderRight: '1px solid #e5e7eb'}}>{m.benchmark}</td>
                  <td style={{padding: '8px 12px', color: '#4b5563'}}>{m.meaning}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const EngineAllocTable = () => (
  <div className="card" style={{height:'100%', display:'flex', flexDirection:'column', minHeight:0}}>
    <h3 style={{marginTop:0, color:'var(--msb-red)', fontSize: '1.6rem'}}><i className="fas fa-diagram-project" style={{marginRight:10}}></i>Phân bổ engine theo loại hồ sơ</h3>
    <table className="clean-table" style={{marginTop:14, fontSize:17}}>
      <thead><tr><th style={{width:'28%'}}>Giải pháp</th><th>Nhóm giấy tờ áp dụng</th></tr></thead>
      <tbody>
        {ENGINE_ALLOC.map((r, i) => (
          <tr key={i}>
            <td style={{fontWeight:800, color:'var(--msb-orange)'}}>{r.engine}</td>
            <td>{r.docs}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="card card-highlight" style={{marginTop:14, padding:'14px 18px'}}>
      <div style={{display:'flex', gap:12, alignItems:'start'}}>
        <i className="fas fa-circle-info" style={{color:'var(--msb-orange)', marginTop:3}}></i>
        <div style={{fontSize:16, lineHeight:1.5}}>Gợi ý triển khai: khởi tạo rule routing theo bảng này, sau đó dùng monitoring để hiệu chỉnh theo dữ liệu thật (drift theo chất lượng scan/chữ tay/dấu đỏ).</div>
      </div>
    </div>
  </div>
);

const CurrentStateAnalysis = () => (
  <div style={{height: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '24px'}}>
    {[
      {
        icon: 'fa-user-clock', color: '#ef4444', bg: '#fee2e2',
        title: 'Phụ thuộc thủ công',
        items: [
            <>Nhiều bước nhập liệu, đối chiếu thủ công.</>,
            <>Kiểm tra chứng từ hoàn toàn bằng <span style={{color: 'var(--msb-red)', fontWeight: '700'}}>mắt thường</span>.</>
        ]
      },
      {
        icon: 'fa-file-invoice', color: '#f97316', bg: '#ffedd5',
        title: 'Quy trình giấy tờ',
        items: [
            <>Quy trình còn phân tán, lưu trữ vật lý.</>,
            <>Thiếu tính <span style={{color: 'var(--msb-orange)', fontWeight: '700'}}>tự động hóa cao</span> trong luân chuyển.</>
        ]
      },
      {
        icon: 'fa-triangle-exclamation', color: '#eab308', bg: '#fef9c3',
        title: 'Rủi ro sai sót',
        items: [
            <>Dễ lỗi nhập liệu, bỏ sót thông tin.</>,
            <>Kết quả <span style={{color: 'var(--msb-red)', fontWeight: '700'}}>phụ thuộc cá nhân</span>, khó chuẩn hóa.</>
        ]
      },
      {
        icon: 'fa-stopwatch', color: '#3b82f6', bg: '#dbeafe',
        title: 'Hiệu suất thấp',
        items: [
            <>Thời gian xử lý kéo dài.</>,
            <>Khó đáp ứng <span style={{color: 'var(--msb-red)', fontWeight: '700'}}>SLA</span> khi giao dịch tăng đột biến.</>
        ]
      },
      {
        icon: 'fa-eye', color: '#8b5cf6', bg: '#ede9fe',
        title: 'Thiếu kiểm soát',
        items: [
            <>Thiếu công cụ theo dõi tiến độ tự động.</>,
            <>Khó truy vết <span style={{color: 'var(--msb-red)', fontWeight: '700'}}>rủi ro vận hành</span> (Audit Trail).</>
        ]
      },
      {
        icon: 'fa-sitemap', color: '#10b981', bg: '#d1fae5',
        title: 'Hệ thống ảnh hưởng',
        items: [
            <><span style={{color: 'var(--msb-orange)', fontWeight: '700'}}>BPM Ops, BPM Risk, Digi-lending</span> bị ảnh hưởng.</>,
            <>IB Corp, IB Admin tồn tại điểm nghẽn.</>
        ]
      }
    ].map((item, index) => (
      <div key={index} className="card" style={{padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', borderTop: `4px solid ${item.color}`, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <div style={{width: '48px', height: '48px', borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0}}>
            <i className={`fas ${item.icon}`} style={{fontSize: '20px'}}></i>
          </div>
          <h4 style={{margin: 0, fontSize: '1.4rem', color: '#1f2937', fontWeight: '700'}}>{item.title}</h4>
        </div>
        <ul style={{margin: 0, paddingLeft: '20px', fontSize: '17px', color: '#4b5563', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px'}}>
          {item.items.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const DataQualityVisual = () => (
  <div style={{height: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
    <div style={{fontSize: '18px', color: '#4b5563', background: '#f3f4f6', padding: '16px 24px', borderRadius: '12px', borderLeft: '6px solid var(--msb-orange)'}}>
      Hệ thống văn bản điện tử đã vận hành ổn định. Tuy nhiên, đầu vào cho OCR vẫn gặp rào cản tại các điểm chạm vật lý (chi nhánh, khách hàng upload):
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '24px', flex: 1}}>
      {[
        {
          name: "Nguồn dữ liệu hỗn hợp",
          slogan: "HYBRID INPUT",
          features: ["Kết hợp giữa văn bản số hóa sẵn và bản scan/chụp", "Đến từ nhiều kênh: Mobile App, Quầy, Đối tác"],
          color: "var(--msb-red)",
          icon: "fas fa-share-nodes",
          bg: "#fef2f2"
        },
        {
          name: "Định dạng chưa chuẩn hóa",
          slogan: "VARIOUS FORMATS",
          features: ["Tồn tại song song PDF, Word và ảnh (JPG/PNG)", "Độ phân giải và chuẩn nén khác nhau giữa các nguồn"],
          color: "var(--msb-orange)",
          icon: "fas fa-file-lines",
          bg: "#fff7ed"
        },
        {
          name: "Thách thức từ ảnh chụp",
          slogan: "IMAGE QUALITY",
          features: ["Một số ảnh bị mờ, nghiêng, thiếu sáng (Mobile)", "Bản photocopy mờ hoặc scan độ phân giải thấp"],
          color: "#0d6efd",
          icon: "fas fa-camera-retro",
          bg: "#eff6ff"
        },
        {
          name: "Nhiễu & Đặc thù pháp lý",
          slogan: "NOISE & STAMPS",
          features: ["Dấu đỏ đóng chồng lên chữ (đặc thù ngân hàng)", "Nhiễu nền, vết mực, bóng tay trên giấy tờ cũ"],
          color: "#198754",
          icon: "fas fa-stamp",
          bg: "#f0fdf4"
        }
      ].map((card, i) => (
        <div key={i} className="card" style={{padding: '24px', display: 'flex', gap: '20px', alignItems: 'start', borderTop: `4px solid ${card.color}`, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'}}>
           <div style={{width: '64px', height: '64px', borderRadius: '16px', background: card.bg, color: card.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
             <i className={card.icon} style={{fontSize: '28px'}}></i>
           </div>
           <div>
             <div style={{fontSize: '14px', fontWeight: '700', color: card.color, letterSpacing: '1px', marginBottom: '4px'}}>{card.slogan}</div>
             <h3 style={{margin: '0 0 12px 0', fontSize: '1.5rem', color: '#1f2937'}}>{card.name}</h3>
             <ul style={{margin: 0, paddingLeft: '20px', fontSize: '17px', color: '#4b5563', lineHeight: '1.5'}}>
               {card.features.map((f, j) => <li key={j} style={{marginBottom: '4px'}}>{f}</li>)}
             </ul>
           </div>
        </div>
      ))}
    </div>
  </div>
);

const ErrorAnalysisVisual = () => (
  <div style={{height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px'}}>
    <div className="card" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderTop: '6px solid var(--msb-red)'}}>
      <div style={{padding: '24px', background: '#fef2f2', borderBottom: '1px solid #fee2e2', display: 'flex', alignItems: 'center', gap: '16px'}}>
        <div style={{width: '56px', height: '56px', borderRadius: '12px', background: 'white', color: 'var(--msb-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
          <i className="fas fa-microchip" style={{fontSize: '28px'}}></i>
        </div>
        <div>
          <h3 style={{margin: 0, fontSize: '1.6rem', color: '#991b1b'}}>In-House (AIEP)</h3>
          <div style={{color: '#ef4444', fontSize: '16px', fontWeight: '600'}}>Các điểm yếu kỹ thuật chính</div>
        </div>
      </div>
      <div style={{padding: '28px', flex: 1}}>
        <ul style={{margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          {[
            { label: "Ngôn ngữ", text: "Hay mất/lẫn dấu tiếng Việt (â, ã, ơ, ô)." },
            { label: "Thành phần", text: "Chưa nhận diện được chữ ký, con dấu." },
            { label: "Cấu trúc", text: "Kém với bảng biểu phức tạp & chữ viết tay." },
            { label: "Vận hành", text: "Hay gặp lỗi OOO/CUDA (hết tài nguyên)." },
            { label: "Đầu ra", text: "Chỉ OCR ra text thuần, chưa có cấu trúc." }
          ].map((item, i) => (
            <li key={i} style={{display: 'flex', gap: '16px', alignItems: 'start'}}>
              <i className="fas fa-circle-xmark" style={{color: '#ef4444', marginTop: '5px', fontSize: '18px'}}></i>
              <div style={{fontSize: '17px', lineHeight: '1.5', color: '#374151'}}>
                <strong style={{color: '#111827'}}>{item.label}:</strong> {item.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="card" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderTop: '6px solid var(--msb-orange)'}}>
      <div style={{padding: '24px', background: '#fff7ed', borderBottom: '1px solid #ffedd5', display: 'flex', alignItems: 'center', gap: '16px'}}>
        <div style={{width: '56px', height: '56px', borderRadius: '12px', background: 'white', color: 'var(--msb-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
          <i className="fas fa-cloud-bolt" style={{fontSize: '28px'}}></i>
        </div>
        <div>
          <h3 style={{margin: 0, fontSize: '1.6rem', color: '#9a3412'}}>VNG Cloud</h3>
          <div style={{color: '#f97316', fontSize: '16px', fontWeight: '600'}}>Các điểm yếu kỹ thuật chính</div>
        </div>
      </div>
      <div style={{padding: '28px', flex: 1}}>
        <ul style={{margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          {[
            { label: "Nhầm ký tự", text: 'Nhầm Y-V, M-N, dấu "=" thành "-".' },
            { label: "Hậu xử lý", text: "Tự ý thêm thông tin sai lệch hoặc sai dấu." },
            { label: "Dữ liệu số", text: "Nhầm số điện thoại (VD: 8989 -> 8998)." },
            { label: "Độ ổn định", text: "Giảm mạnh với ảnh mờ hoặc chữ xấu." }
          ].map((item, i) => (
            <li key={i} style={{display: 'flex', gap: '16px', alignItems: 'start'}}>
              <i className="fas fa-triangle-exclamation" style={{color: '#f97316', marginTop: '5px', fontSize: '18px'}}></i>
              <div style={{fontSize: '17px', lineHeight: '1.5', color: '#374151'}}>
                <strong style={{color: '#111827'}}>{item.label}:</strong> {item.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ImprovementStrategyVisual = () => (
  <div style={{height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px'}}>
    {[
      {
        num: "01",
        title: "Cải thiện tiếng Việt",
        icon: "fa-language",
        color: "#0d6efd",
        bg: "#eff6ff",
        desc: "Giải quyết lỗi mất/lẫn dấu (â, ã, ơ, ô) để tăng CAR/WAR.",
        items: ["Bổ sung dữ liệu huấn luyện/finetune đặc thù.", "Hậu xử lý chuẩn hóa dấu có kiểm soát."]
      },
      {
        num: "02",
        title: "Hiểu cấu trúc & Vùng",
        icon: "fa-table",
        color: "#198754",
        bg: "#f0fdf4",
        desc: "Tăng khả năng xử lý bảng biểu, chữ viết tay, con dấu.",
        items: ["Trích xuất theo layout (key-value/table).", "Nhận diện vùng ảnh quan trọng (stamp)."]
      },
      {
        num: "03",
        title: "Ổn định vận hành",
        icon: "fa-server",
        color: "#6366f1",
        bg: "#eef2ff",
        desc: "Khắc phục lỗi OOO/CUDA, đảm bảo SLA hệ thống.",
        items: ["Tối ưu pipeline inference & giới hạn VRAM.", "Giám sát tài nguyên + tự động degrade."]
      }
    ].map((item, i) => (
      <div key={i} className="card" style={{padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px', borderTop: `6px solid ${item.color}`, position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', top: '-10px', right: '-10px', fontSize: '80px', fontWeight: '900', color: item.color, opacity: 0.05}}>{item.num}</div>
        <div style={{width: '64px', height: '64px', borderRadius: '16px', background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
           <i className={`fas ${item.icon}`} style={{fontSize: '32px'}}></i>
        </div>
        <div>
          <h3 style={{margin: '0 0 12px 0', fontSize: '1.6rem', color: '#1f2937'}}>{item.title}</h3>
          <div style={{fontSize: '17px', color: '#4b5563', lineHeight: '1.5', marginBottom: '16px', minHeight: '50px'}}>
            {item.desc}
          </div>
          <div style={{height: '1px', background: '#e5e7eb', marginBottom: '16px'}}></div>
          <ul style={{margin: 0, paddingLeft: '20px', fontSize: '16px', color: '#374151', lineHeight: '1.6'}}>
            {item.items.map((sub, j) => <li key={j} style={{marginBottom: '8px'}}>{sub}</li>)}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const UseCasesVisual = () => (
  <div style={{height: '100%', display: 'flex', flexDirection: 'column', gap: '24px'}}>
    {/* Intro Box */}
    <div style={{background: '#f0f9ff', borderLeft: '4px solid #0ea5e9', padding: '16px 20px', borderRadius: '0 8px 8px 0', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
       <div style={{background: '#e0f2fe', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
         <i className="fas fa-circle-info" style={{color: '#0ea5e9', fontSize: '20px'}}></i>
       </div>
       <div style={{color: '#0c4a6e', fontSize: '15px', lineHeight: '1.5'}}>
         Gợi ý use cases bám sát các hệ thống bị ảnh hưởng (<strong>BPM Ops/Risk, Digi-lending, IB Corp/Admin</strong>) và nhóm giấy tờ đã đánh giá trong báo cáo.
       </div>
    </div>

    {/* Cards Grid */}
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', flex: 1, minHeight: 0}}>
       {/* Card 1 */}
       <div className="card" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--msb-red)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}>
          <div style={{padding: '24px', background: 'linear-gradient(135deg, #fff, #fff1f2)', borderBottom: '1px solid #ffe4e6', position: 'relative'}}>
             <div style={{position: 'absolute', top: '15px', right: '15px', opacity: 0.08, transform: 'rotate(-15deg)'}}>
                <i className="fas fa-id-card" style={{fontSize: '100px', color: 'var(--msb-red)'}}></i>
             </div>
             <span style={{background: 'var(--msb-red)', color: 'white', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Front Office</span>
             <h3 style={{margin: '16px 0 0 0', fontSize: '1.4rem', color: '#881337', fontWeight: '800'}}>eKYC & Onboarding</h3>
          </div>
          <div style={{padding: '24px', flex: 1, background: 'white'}}>
             <ul style={{margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15px'}}>
                <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                   <i className="fas fa-check" style={{color: 'var(--msb-red)', marginTop: '4px', fontSize: '14px'}}></i>
                   <span style={{color: '#374151', lineHeight: '1.4'}}>Trích xuất trường định danh (CCCD)</span>
                </li>
                <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                   <i className="fas fa-check" style={{color: 'var(--msb-red)', marginTop: '4px', fontSize: '14px'}}></i>
                   <span style={{color: '#374151', lineHeight: '1.4'}}>Kiểm tra đủ hồ sơ tự động</span>
                </li>
                <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                   <i className="fas fa-check" style={{color: 'var(--msb-red)', marginTop: '4px', fontSize: '14px'}}></i>
                   <span style={{color: '#374151', lineHeight: '1.4'}}>Giảm nhập liệu tay (ảnh mờ/nghiêng)</span>
                </li>
             </ul>
          </div>
       </div>

       {/* Card 2 */}
       <div className="card" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--msb-orange)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}>
          <div style={{padding: '24px', background: 'linear-gradient(135deg, #fff, #fff7ed)', borderBottom: '1px solid #ffedd5', position: 'relative'}}>
             <div style={{position: 'absolute', top: '15px', right: '15px', opacity: 0.08, transform: 'rotate(-15deg)'}}>
                <i className="fas fa-file-signature" style={{fontSize: '100px', color: 'var(--msb-orange)'}}></i>
             </div>
             <span style={{background: 'var(--msb-orange)', color: 'white', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Core Automation</span>
             <h3 style={{margin: '16px 0 0 0', fontSize: '1.4rem', color: '#9a3412', fontWeight: '800'}}>Tín dụng / LOS</h3>
          </div>
          <div style={{padding: '24px', flex: 1, background: 'white'}}>
             <ul style={{margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15px'}}>
                <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                   <i className="fas fa-check" style={{color: 'var(--msb-orange)', marginTop: '4px', fontSize: '14px'}}></i>
                   <span style={{color: '#374151', lineHeight: '1.4'}}>Xử lý Khế ước, HĐLĐ, QĐ làm việc</span>
                </li>
                <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                   <i className="fas fa-check" style={{color: 'var(--msb-orange)', marginTop: '4px', fontSize: '14px'}}></i>
                   <span style={{color: '#374151', lineHeight: '1.4'}}>Chuẩn hóa dữ liệu phê duyệt</span>
                </li>
                <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                   <i className="fas fa-check" style={{color: 'var(--msb-orange)', marginTop: '4px', fontSize: '14px'}}></i>
                   <span style={{color: '#374151', lineHeight: '1.4'}}>Giảm can thiệp thủ công</span>
                </li>
             </ul>
          </div>
       </div>

       {/* Card 3 */}
       <div className="card" style={{padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderTop: '4px solid #0d6efd', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}>
          <div style={{padding: '24px', background: 'linear-gradient(135deg, #fff, #eff6ff)', borderBottom: '1px solid #dbeafe', position: 'relative'}}>
             <div style={{position: 'absolute', top: '15px', right: '15px', opacity: 0.08, transform: 'rotate(-15deg)'}}>
                <i className="fas fa-building-columns" style={{fontSize: '100px', color: '#0d6efd'}}></i>
             </div>
             <span style={{background: '#0d6efd', color: 'white', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Back Office</span>
             <h3 style={{margin: '16px 0 0 0', fontSize: '1.4rem', color: '#1e40af', fontWeight: '800'}}>Ops & Corp Banking</h3>
          </div>
          <div style={{padding: '24px', flex: 1, background: 'white'}}>
             <ul style={{margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15px'}}>
                <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                   <i className="fas fa-check" style={{color: '#0d6efd', marginTop: '4px', fontSize: '14px'}}></i>
                   <span style={{color: '#374151', lineHeight: '1.4'}}>Lệnh chuyển tiền, BCTC, Hóa đơn</span>
                </li>
                <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                   <i className="fas fa-check" style={{color: '#0d6efd', marginTop: '4px', fontSize: '14px'}}></i>
                   <span style={{color: '#374151', lineHeight: '1.4'}}>Hỗ trợ đối chiếu & chốt số liệu</span>
                </li>
                <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
                   <i className="fas fa-check" style={{color: '#0d6efd', marginTop: '4px', fontSize: '14px'}}></i>
                   <span style={{color: '#374151', lineHeight: '1.4'}}>Tăng kiểm soát & truy vết (Audit)</span>
                </li>
             </ul>
          </div>
       </div>
    </div>
  </div>
);

const SolutionComparisonTable = () => (
  <div className="card" style={{height: '100%', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid #e5e7eb'}}>
    <div style={{overflow: 'auto', flex: 1}}>
      <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '15px'}}>
        <thead>
          <tr style={{background: '#f8fafc', borderBottom: '2px solid #e2e8f0'}}>
            <th style={{padding: '16px 20px', textAlign: 'left', width: '20%', color: '#64748b', fontWeight: '600', position: 'sticky', top: 0, background: '#f8fafc'}}>TIÊU CHÍ</th>
            <th style={{padding: '16px 20px', textAlign: 'left', width: '40%', color: 'var(--msb-red)', fontSize: '1.1rem', fontWeight: '700', position: 'sticky', top: 0, background: '#f8fafc'}}>IN-HOUSE (AIEP)</th>
            <th style={{padding: '16px 20px', textAlign: 'left', width: '40%', color: 'var(--msb-orange)', fontSize: '1.1rem', fontWeight: '700', position: 'sticky', top: 0, background: '#f8fafc'}}>VNG CLOUD</th>
          </tr>
        </thead>
        <tbody>
          {[
            { label: 'Tổng quan', in: 'Báo cáo 24/12/2025 (1002 file)', vng: 'Báo cáo 11/12/2024 (1002 file)' },
            { label: 'Đánh giá cấp độ (Maturity)', in: <span style={{fontWeight: 'bold', color: '#0ea5e9', background: '#e0f2fe', padding: '4px 8px', borderRadius: '4px'}}>Level 2 (Template/Structured)</span>, vng: <span style={{fontWeight: 'bold', color: '#0ea5e9', background: '#e0f2fe', padding: '4px 8px', borderRadius: '4px'}}>Level 2 (Template/Structured)</span> },
            { label: 'Độ chính xác (WAR)', in: <span style={{fontWeight: 'bold', color: '#dc2626'}}>88.87%</span>, vng: <span style={{fontWeight: 'bold', color: '#16a34a'}}>92.77%</span> },
            { label: 'Độ chính xác (CAR)', in: '81.24%', vng: <span style={{fontWeight: 'bold', color: '#16a34a'}}>93.64%</span> },
            { label: 'Tỷ lệ lỗi (WER)', in: '11.13%', vng: <span style={{fontWeight: 'bold', color: '#16a34a'}}>7.23%</span> },
            { label: 'Tỷ lệ từ chối', in: <span style={{fontWeight: 'bold', color: '#16a34a'}}>6.66%</span>, vng: '11.35%' },
            { label: 'Ưu điểm chính', in: 'Chủ động công nghệ, tối ưu chi phí (Cost-effective).', vng: 'Chất lượng cao, Private Cloud (như On-Premise).' },
            { label: 'Điểm yếu', in: 'Lỗi tiếng Việt (dấu), bảng biểu, chữ viết tay. Hay OOO/CUDA.', vng: 'Nhầm ký tự (Y-V, M-N), lỗi hậu xử lý, chi phí cao hơn.' }
          ].map((row, idx) => (
            <tr key={idx} style={{borderBottom: '1px solid #f1f5f9', background: idx % 2 === 0 ? 'white' : '#fafafa'}}>
              <td style={{padding: '14px 20px', fontWeight: '600', color: '#334155'}}>{row.label}</td>
              <td style={{padding: '14px 20px', color: '#475569', lineHeight: '1.5'}}>{row.in}</td>
              <td style={{padding: '14px 20px', color: '#475569', lineHeight: '1.5'}}>{row.vng}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const RoutingPrinciples = () => (
  <div className="card" style={{height: '100%', display: 'flex', flexDirection: 'column', padding: '24px', gap: '20px'}}>
    <h3 style={{margin: 0, color: '#111827', fontSize: '1.6rem', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fas fa-filter" style={{color: '#0d6efd'}}></i>
      Nguyên tắc Routing đề xuất
    </h3>
    
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center'}}>
      {/* Core Principle */}
      <div style={{padding: '16px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
        <div style={{fontWeight: '700', color: '#334155', marginBottom: '8px', fontSize: '1.3rem'}}>
          <i className="fas fa-ban" style={{color: '#ef4444', marginRight: '8px'}}></i>
          Không chọn "một engine cho mọi thứ"
        </div>
        <div style={{color: '#475569', lineHeight: '1.5', fontSize: '17px'}}>
          Routing linh hoạt dựa trên: <span style={{fontWeight: '700', color: '#0d6efd'}}>Loại giấy tờ</span>, <span style={{fontWeight: '700', color: '#0d6efd'}}>Độ phức tạp</span> (bảng/chữ tay) và <span style={{fontWeight: '700', color: '#0d6efd'}}>Tối ưu chi phí</span>.
        </div>
      </div>

      {/* Specific Rules */}
      <ul style={{margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px'}}>
        <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
          <i className="fas fa-check-circle" style={{color: '#16a34a', marginTop: '4px'}}></i>
          <span style={{color: '#374151', lineHeight: '1.5', fontSize: '17px'}}>
            Nhóm cần <span style={{fontWeight: '700', color: '#16a34a'}}>tối ưu chi phí</span> & template đặc thù: Ưu tiên <strong>In-house / Finetune</strong>.
          </span>
        </li>
        <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
          <i className="fas fa-check-circle" style={{color: '#16a34a', marginTop: '4px'}}></i>
          <span style={{color: '#374151', lineHeight: '1.5', fontSize: '17px'}}>
            Nhóm chứng từ, báo cáo, khế ước phức tạp: Tận dụng chất lượng <strong>VNG Cloud</strong>.
          </span>
        </li>
        <li style={{display: 'flex', gap: '12px', alignItems: 'start'}}>
          <i className="fas fa-shield-halved" style={{color: '#f59e0b', marginTop: '4px'}}></i>
          <span style={{color: '#374151', lineHeight: '1.5', fontSize: '17px'}}>
            Cơ chế <strong>Fallback</strong>: Tự động chuyển engine nếu gặp lỗi hoặc chất lượng suy giảm.
          </span>
        </li>
      </ul>
    </div>
  </div>
);

const FinalProposal = () => (
  <div style={{height: '100%', display: 'flex', flexDirection: 'column', gap: '30px'}}>
    {/* Section 1: Core Capabilities */}
    <div>
      <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
        <div style={{width: '40px', height: '40px', borderRadius: '10px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <i className="fas fa-layer-group" style={{fontSize: '20px'}}></i>
        </div>
        <h3 style={{margin: 0, color: '#0f172a', fontSize: '1.6rem'}}>Năng lực lõi cần xây dựng trên AIEP</h3>
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px'}}>
        {[
          { icon: 'fa-route', title: 'Smart Routing', desc: 'Tự động chọn Engine theo loại giấy tờ, độ phức tạp & tối ưu chi phí.' },
          { icon: 'fa-shuffle', title: 'Active Fallback', desc: 'Cơ chế chuyển luồng dự phòng khi Engine chính gặp lỗi/giảm chất lượng.' },
          { icon: 'fa-chart-line', title: 'Live Monitoring', desc: 'Giám sát Realtime SLA, tỷ lệ lỗi & cảnh báo Drift chất lượng.' }
        ].map((item, i) => (
          <div key={i} className="card" style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', borderLeft: '4px solid #0ea5e9'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
               <i className={`fas ${item.icon}`} style={{fontSize: '24px', color: '#0ea5e9'}}></i>
               <div style={{fontWeight: '700', color: '#1e293b', fontSize: '1.3rem'}}>{item.title}</div>
            </div>
            <div style={{fontSize: '17px', color: '#475569', lineHeight: '1.5'}}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Section 2: Next Actions */}
    <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px'}}>
        <div style={{width: '40px', height: '40px', borderRadius: '10px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <i className="fas fa-list-check" style={{fontSize: '20px'}}></i>
        </div>
        <h3 style={{margin: 0, color: '#0f172a', fontSize: '1.6rem'}}>Kế hoạch hành động tiếp theo</h3>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', flex: 1}}>
        {[
          { 
            cat: 'Governance', icon: 'fa-gavel', color: '#7c3aed', bg: '#f3e8ff',
            items: ['Chuẩn hóa taxonomy loại giấy tờ.', 'Thiết lập ngưỡng chất lượng (Quality Gate) cho từng nhóm hồ sơ.'] 
          },
          { 
            cat: 'Technology', icon: 'fa-code', color: '#2563eb', bg: '#dbeafe',
            items: ['Tích hợp Fallback & chuẩn hóa Output (Text/Structured).', 'Tối ưu pipeline, giám sát tài nguyên OOO/CUDA.'] 
          },
          { 
            cat: 'Data & AI', icon: 'fa-database', color: '#db2777', bg: '#fce7f3',
            items: ['Thu thập mẫu khó (dấu đỏ, chữ tay, bảng biểu).', 'Finetune In-house cho nhóm PII & Template đặc thù.'] 
          }
        ].map((group, i) => (
          <div key={i} className="card" style={{padding: '20px', borderTop: `4px solid ${group.color}`, display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{width: '32px', height: '32px', borderRadius: '8px', background: group.bg, color: group.color, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                 <i className={`fas ${group.icon}`} style={{fontSize: '14px'}}></i>
              </div>
              <span style={{fontWeight: '700', color: '#374151', textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.5px'}}>{group.cat}</span>
            </div>
            <ul style={{margin: 0, paddingLeft: '20px', fontSize: '17px', color: '#4b5563', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {group.items.map((text, j) => <li key={j}>{text}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const SLIDES_DATA = [
{
  "id": 1,
  "type": "cover",
  "org": "MSB. AI PROGRAM",
  "title": "Đánh giá Năng lực",
  "titleGradient": "OCR Engine",
  "subtitle": "Báo cáo chi tiết năng lực OCR (In-House vs VNG Cloud) & Đề xuất",
  "date": "24/12/2025",
  "unit": "Đơn vị: AIP - Usecase",
  "bgImage": coverBg
},
{
  "id": 2,
  "type": "agenda",
  "title": "Mục lục",
  "items": [
    {
      "num": "01",
      "title": "Tổng quan về OCR Engine",
      "color": "var(--msb-red)"
    },
    {
      "num": "02",
      "title": "Đánh giá hiện trạng ứng dụng OCR tại MSB",
      "color": "var(--msb-orange)"
    },
    {
      "num": "03",
      "title": "Báo cáo đánh giá chi tiết năng lực OCR sẵn có",
      "color": "#0d6efd"
    },
    {
      "num": "04",
      "title": "Đề xuất triển khai OCR Engine trên nền tảng AIEP",
      "color": "#198754"
    }
  ]
},
{
  "id": 3,
  "type": "layout_section_header",
  "title": "1. Tổng quan về OCR Engine",
  "subtitle": "Khái niệm • Phân loại • Mức độ trưởng thành"
},
{
  "id": 4,
  "type": "layout_full",
  "title": "1. Tổng quan về OCR Engine",
  "subTitle": "1.1 OCR là gì?",
  "content": <OCRConceptVisual />
},
{
  "id": 5,
  "type": "layout_full",
  "title": "1. Tổng quan về OCR Engine",
  "subTitle": "1.2 Phân loại & cấp độ năng lực OCR Engine",
  "content": <MaturityTable />
},
{
  "id": 7,
  "type": "layout_section_header",
  "title": "2. Hiện trạng OCR tại MSB",
  "subtitle": "Thực trạng vận hành • Chất lượng dữ liệu • Use cases tiềm năng"
},
{
  "id": 8,
  "type": "layout_full",
  "title": "2. Đánh giá hiện trạng ứng dụng OCR tại MSB",
  "subTitle": "2.1 Thực trạng nghiệp vụ & vận hành",
  "content": <CurrentStateAnalysis />
},
{
  "id": 9,
  "type": "layout_full",
  "title": "2. Đánh giá hiện trạng ứng dụng OCR tại MSB",
  "subTitle": "2.2 Chất lượng dữ liệu đầu vào",
  "content": <DataQualityVisual />
},
{
  "id": 10,
  "type": "layout_full",
  "title": "2. Đánh giá hiện trạng ứng dụng OCR tại MSB",
  "subTitle": "2.3 Use cases tiềm năng tại MSB",
  "content": <UseCasesVisual />
},
{
  "id": 11,
  "type": "layout_section_header",
  "title": "3. Đánh giá chi tiết năng lực OCR",
  "subtitle": "In-house (AIEP) vs VNG Cloud • Chất lượng • Lỗi theo loại giấy tờ"
},
{
  "id": 12,
  "type": "layout_full",
  "title": "3. Báo cáo đánh giá chi tiết năng lực OCR",
  "subTitle": "3.1 Tổng quan số liệu & Cấp độ trưởng thành",
  "content": <SolutionComparisonTable />
},
{
  "id": 13,
  "type": "layout_split_content",
  "title": "3. Báo cáo đánh giá chi tiết năng lực OCR",
  "subTitle": "3.2 So sánh tổng quan (Visual)",
  "layout": "split-chart-50-50",
  "analysis": {
    "points": [
      {
        "label": "Cách chuẩn hóa:",
        "text": "WAR/CAR quy đổi = %/10; Rejection/WER/CER quy đổi = (100 - %)/10 (càng thấp càng tốt).",
        "color": "var(--msb-orange)"
      },
      {
        "label": "Điểm nhấn:",
        "text": "VNG Cloud (Private Cloud) vượt trội ở CAR và các lỗi WER/CER, phù hợp các nhóm giấy tờ quan trọng.",
        "color": "var(--msb-red)"
      },
      {
        "label": "In-house:",
        "text": "Lợi thế lớn về chi phí và chủ động công nghệ, nhưng cần cải thiện CAR và xử lý tiếng Việt có dấu/bảng/chữ tay.",
        "color": "#0d6efd"
      }
    ],
    "takeaways": {
      "icon": "fa-lightbulb",
      "title": "Kết luận dùng cho quyết định chiến lược",
      "items": [
        {
          "icon": "fa-route",
          "text": "Áp dụng routing theo loại giấy tờ + yêu cầu SLA/PII (không dùng 1 engine cho mọi thứ)."
        },
        {
          "icon": "fa-shield",
          "text": "Ưu tiên in-house cho nhóm PII nhạy cảm & template đặc thù; dùng VNG cho nhóm chứng từ/hoá đơn/báo cáo hiệu quả."
        },
        {
          "icon": "fa-eye",
          "text": "Bắt buộc có monitoring chất lượng theo loại tài liệu để phát hiện drift (giảm chất lượng theo đầu vào)."
        }
      ]
    }
  },
  "chart": <RadarChart data={RADAR_COMPARE_DATA} />
},
{
  "id": 14,
  "type": "layout_dual_cards",
  "title": "3. Báo cáo đánh giá chi tiết năng lực OCR",
  "subTitle": "3.3 Phân tích sâu: Tại sao In-House có WER cao?",
  "left": {
    "title": "In-House • WER theo loại giấy tờ",
    "chart": <HorizontalBarChart data={IN_DOC_WER_DATA} customOptions={{ scales: { x: { max: 450, ticks: { callback: v => v + '%' } }, y: { grid: { display: false } } } }} />,
    "desc": "Có outlier rất lớn (VD: Hóa đơn 405.08%; Sao kê 115.03%; GCN QSDĐ 96.60%) theo dữ liệu báo cáo."
  },
  "right": {
    "title": "VNG Cloud • WER theo loại giấy tờ",
    "chart": <HorizontalBarChart data={VNG_DOC_WER_DATA} customOptions={{ scales: { x: { max: 20, ticks: { callback: v => v + '%' } }, y: { grid: { display: false } } } }} />,
    "desc": "VNG có WER rất thấp ở nhiều loại (VD: Lệnh chuyển tiền QT 1.99%; Khế ước 1.56%). N/A: ---"
  }
},
{
  "id": 15,
  "type": "layout_full",
  "title": "3. Báo cáo đánh giá chi tiết năng lực OCR",
  "subTitle": "3.4 Phân tích lỗi & kết luận kỹ thuật",
  "content": <ErrorAnalysisVisual />
},
{
  "id": 16,
  "type": "layout_full",
  "title": "3. Báo cáo đánh giá chi tiết năng lực OCR",
  "subTitle": "3.5 Đề xuất cải tiến (bám sát kết luận kỹ thuật)",
  "content": <ImprovementStrategyVisual />
},
{
  "id": 17,
  "type": "layout_section_header",
  "title": "4. Triển khai OCR Engine trên AIEP",
  "subtitle": "Vấn đề & giải pháp • Năng lực lõi đề xuất"
},
{
  "id": 18,
  "type": "layout_2_col",
  "title": "4. Đề xuất phương án triển khai OCR Engine trên AIEP",
  "subTitle": "4.1 Khuyến nghị sử dụng năng lực OCR (routing theo hồ sơ)",
  "ratio": [
    1.2,
    0.8
  ],
  "left": <EngineAllocTable />,
  "right": <RoutingPrinciples />
},
{
  "id": 19,
  "type": "layout_full",
  "title": "4. Đề xuất phương án triển khai OCR Engine trên AIEP",
  "subTitle": "4.2 Năng lực lõi & Kế hoạch hành động",
  "content": <FinalProposal />
},
{
  "id": 20,
  "type": "end",
  "title": "Cảm ơn",
  "titleGradient": "Q&A",
  "bgImage": coverBg
},
];
