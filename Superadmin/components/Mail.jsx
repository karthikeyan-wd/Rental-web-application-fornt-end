import React, { useState } from "react";
import { 
  Inbox, 
  Send, 
  FileText, 
  Archive, 
  Trash2, 
  MoreVertical, 
  RefreshCw, 
  Search, 
  Star, 
  ArrowLeft, 
  ChevronDown, 
  Edit,
  Home,
  AlertCircle 
} from "lucide-react";

const MailApp = () => {
  const [open, setOpen] = useState(true);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [starredEmails, setStarredEmails] = useState([]);
  
  const toggleStar = (id, e) => {
    e.stopPropagation();
    if (starredEmails.includes(id)) {
      setStarredEmails(starredEmails.filter(emailId => emailId !== id));
    } else {
      setStarredEmails([...starredEmails, id]);
    }
  };
  
  const emails = [
    {
      id: 1,
      subject: 'Car Renter Team',
      sender: 'Karthi',
      senderEmail: 'karthi@gmail.com',
      time: '12:30 PM',
      date: 'Today',
      isRead: false,
      body: 'We are thrilled to w, a carefully curated space where fashion meets individuality. Whether you are looking for timeless classics, trendsetting pieces, or that perfect finishing touch, our boutique was designed with you in mind.',
      content: 'Step into our world and explore our Handpicked styles, Unique accessories and A cozy, personalized shopping experience',
      last: 'We are excited to have you here. Let us know if you need anything!',
      
    },
    {
      id: 2,
      subject: 'Shop-Admin',
      sender: 'Mari Muthu Rentals',
      senderEmail: 'marimuthu@gmail.com',
      time: '9:30 AM',
      date: 'Today',
      isRead: false,
      body: 'Spring is in full bloom, and so are our April specials. To celebrate the season and our amazing customers, we are offering you an exclusive April deal:',
      content: '• 15% Off All Purchases\n• Free Gift with Every Order\n• Buy 1 Get 1 50% Off on Selected Items\n\nIntroduce new items or collections with a focus on their features and benefits. Engaging and informative content highlighting seasonal promotions, holiday celebrations, and new product launches.',
      last: 'Valid from April 1 to April 30. Thank you for your continued support!',
    },
    {
      id: 3,
      subject: 'Report',
      sender: 'Manager',
      senderEmail: 'manager@gmail.com',
      time: '4:30 PM',
      date: 'Yesterday',
      isRead: true,
      body: 'We are pleased to invite you to the Parents Meeting scheduled to be held on May 21, 2025 at 10:00 AM in the SMVEC Auditorium. This meeting aims to strengthen the collaboration between the college and parents to ensure the academic progress and well-being of our students.',
      content: 'The agenda for the meeting includes:\n• Academic performance review\n• Upcoming examination schedule\n• Campus activities and opportunities\n• Q&A session with faculty members',
      last: 'We look forward to your presence and participation. Please confirm your attendance by May 15, 2025.',
    },
    {
      id: 4,
      subject: 'Your Monthly Analytics Report',
      sender: 'Team Leader',
      senderEmail: 'teamleader@gmail.com',
      time: '11:45 AM',
      date: 'Apr 28',
      isRead: true,
      body: 'Your monthly analytics report is now available. The report contains detailed insights about user engagement, conversion rates, and traffic sources for April 2025.',
      content: 'Key highlights from this month:\n• 24% increase in user engagement\n• 12% higher conversion rate compared to last month\n• Mobile traffic increased by 18%\n\nLog in to your dashboard to view the complete report and customize your analytics settings.',
      last: 'This is an automated message. Please do not reply to this email.',
    },
    {
      id: 5,
      subject: 'Invoice #INV-2025-1042 - Payment Due',
      sender: 'Billing Department',
      senderEmail: 'billing@services.net',
      time: '3:15 PM',
      date: 'Apr 26',
      isRead: true,
      body: 'This is a reminder that your invoice #INV-2025-1042 for premium subscription services is due for payment on May 5, 2025.',
      content: 'Invoice details:\n• Invoice Number: INV-2025-1042\n• Amount Due: $129.99\n• Due Date: May 5, 2025\n• Service Period: May 2025 - May 2026',
      last: 'Please process the payment at your earliest convenience to avoid service interruption. If you have already made the payment, please disregard this message.',
    },
    {
      id: 6,
      subject: 'Query Team',
      sender: 'HR Department',
      senderEmail: 'hr@company.org',
      time: '10:20 AM',
      date: 'Apr 25',
      isRead: true,
      body: 'We are excited to announce our annual team building event scheduled for June 15-16, 2025 at Lakeview Resort.',
      content: 'The event will feature:\n• Team building activities\n• Strategic planning sessions\n• Guest speakers\n• Evening social gathering\n\nMore details including agenda and transportation arrangements will be shared next week.',
      last: 'Please mark your calendars. Your participation is highly valued and we look forward to this opportunity to strengthen our team connections.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white border-b shadow-sm py-3 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gray-800">MailBox</h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
             
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className={`bg-white shadow-sm w-64 transition-all duration-300 ${open ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
          <div className="p-5">
            <button className="w-full bg-primary hover:bg-indigo-700 text-white flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium">
              <Edit size={18} />
              Compose
            </button>
            
            <div className="mt-8">
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Mailbox</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-primary bg-indigo-50 font-medium">
                    <span className="flex items-center gap-3">
                      <Inbox size={20} />
                      Inbox
                    </span>
                    <span className="bg-indigo-100 text-primary text-xs font-semibold rounded-full px-2 py-0.5">
                      3
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100">
                    <span className="flex items-center gap-3">
                      <Send size={20} />
                      Sent
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100">
                    <span className="flex items-center gap-3">
                      <FileText size={20} />
                      Drafts
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100">
                    <span className="flex items-center gap-3">
                      <AlertCircle size={20} />
                      Spam
                    </span>
                    <span className="bg-gray-200 text-gray-600 text-xs font-semibold rounded-full px-2 py-0.5">
                      2
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100">
                    <span className="flex items-center gap-3">
                      <Trash2 size={20} />
                      Trash
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100">
                    <span className="flex items-center gap-3">
                      <Archive size={20} />
                      Archive
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Labels</h3>
              <div className="space-y-1">
                <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  Personal
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  Work
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  Important
                </a>
                <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  Social
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="bg-white border-b flex items-center justify-between px-6 py-3">
            <nav className="flex items-center">
              <ol className="flex items-center space-x-2 text-sm">
                <li className="flex items-center text-gray-500">
                  <Home size={16} />
                  <span className="ml-2">Home</span>
                </li>
                <li className="flex items-center text-gray-400 mx-2">/</li>
                <li className="text-primary font-medium">Inbox</li>
              </ol>
            </nav>
            <div className="relative flex-1 max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search emails..."
              />
            </div>
          </div>

          {!selectedEmail ? (
            <div className="p-6">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b">
                <div className="flex items-center h-10 px-3 border rounded-lg">
                  <input type="checkbox" className="h-4 w-4 text-primary rounded" />
                  <ChevronDown className="h-4 w-4 text-gray-500 ml-1" />
                </div>
                <button className="h-10 w-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg border">
                  <RefreshCw size={18} />
                </button>
                <button className="h-10 w-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg border">
                  <Archive size={18} />
                </button>
                <button className="h-10 w-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg border">
                  <Trash2 size={18} />
                </button>
                <button className="h-10 w-10 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg border">
                  <MoreVertical size={18} />
                </button>
              </div>

              <div className="space-y-1">
                {emails.map((email) => (
                  <div 
                    key={email.id} 
                    onClick={() => setSelectedEmail(email)}
                    className={`flex items-center p-3 rounded-lg cursor-pointer bg-white-200 font-medium hover:bg-gray-100 border shadow-sm`}
                  >
                    <div className="flex items-center gap-4 w-12">
                      <input type="checkbox" className="h-4 w-4 text-primary rounded" onClick={(e) => e.stopPropagation()} />
                      <button onClick={(e) => toggleStar(email.id, e)}>
                        <Star 
                          className={`h-5 w-5 ${starredEmails.includes(email.id) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
                        />
                      </button>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{email.sender}</p>
                        <p className="text-xs text-gray-500">{email.time} • {email.date}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-800 mt-1">{email.subject}</p>
                      <p className="text-sm text-gray-500 mt-1 truncate">{email.body.substring(0, 100)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-6">
                  <button 
                    onClick={() => setSelectedEmail(null)} 
                    className="flex items-center gap-2 px-4 py-2 text-primary bg-indigo-50 hover:bg-indigo-100 rounded-lg font-medium"
                  >
                    <ArrowLeft size={18} />
                    Back to Inbox
                  </button>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                      <Archive size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                      <Trash2 size={18} />
                    </button>
                    <button onClick={(e) => toggleStar(selectedEmail.id, e)}>
                      <Star 
                        className={`h-5 w-5 ${starredEmails.includes(selectedEmail.id) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
                      />
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedEmail.subject}</h1>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-primary font-semibold">
                      {selectedEmail.sender.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-gray-900 font-medium">{selectedEmail.sender}</p>
                        <p className="text-sm text-gray-500">&lt;{selectedEmail.senderEmail}&gt;</p>
                      </div>
                      <p className="text-sm text-gray-500">To: you@example.com</p>
                      <p className="text-sm text-gray-500">{selectedEmail.time} • {selectedEmail.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <p className="text-gray-800 leading-relaxed">{selectedEmail.body}</p>
                  <div className="whitespace-pre-line text-gray-800 leading-relaxed">{selectedEmail.content}</div>
                  <p className="text-gray-800 leading-relaxed pt-4">{selectedEmail.last}</p>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium">
                    Reply
                  </button>
                  <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium ml-2">
                    Forward
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MailApp;