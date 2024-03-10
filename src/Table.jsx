import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import StarIcon from '@mui/icons-material/Star';
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
 
const TABLE_HEAD = ["","#","Name", "Price","1h%", "24h%", "7d%", "Market Cap",  "volume(24h)", "Last 7 days", ];
 
const TABLE_ROWS = [
  {
    no:"1",
    img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    
    logo:"BTC",
    name: "Bitcoin",
    
    hr:"0.25%",
    amount: "$68,767.01",
    date: "$1,368,737,522,844",
    thr: "1.70%",
    days:"11.71%",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    no:"2",
    hr:"0.25%",
    img: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    logo:"ETH",
    name: "Ethereum",
    amount: "$4,500",
    date: "$471,754,636,228",
    thr: "1.70%",
    days:"11.71%",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    no:"3",
    hr:"0.25%",
    img: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    logo:"BNB",
    name: "BNB",
    amount: "$531.78",
    date: "$79,353,878,387",
    thr: "0.91%",
    days:"11.71%",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    no:"4",
    hr:"0.25%",
    img: "https://www.liblogo.com/img-logo/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png",
    logo:"SOL",
    name: "Solana",
    amount: "$145.60",
    date: "$64,201,600,845",
    thr: "1.70%",
    days:"11.71%",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    no:"5",
    hr:"0.25%",
    img: "https://altcoinsbox.com/wp-content/uploads/2023/01/xrp-logo.png",
    logo:"XRP",
    name: "XRP",
    amount: "$0.6576",
    date: "$33,769,301,085",
    thr: "1.56%",
    days:"11.71%",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];
 
export function TransactionsTable() {
  return (
    <Card className="h-full font-custom no-scrollbar w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex flex-col justify-between gap-8 md:flex-row  md:items-center ">
          
          <div className="flex w-full pt-1 shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll no-scrollbar px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="black"
                    className="font-bold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  no,

                  img,
                  logo,
                  name,
                  amount,
                  hr,
                  thr,
                  days,
                  account,
                  accountNumber,
                  expiry,
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                  <td className={classes}>
                      
                        
                          <StarIcon className="h-4 w-4 hover:bg-gray-200 rounded-lg focus:text-orange-500 text-gray-400" />
                        
                      
                    </td>
                  <td className={classes}>
                  
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {no}
                      </Typography>
                    </td>
                    <td className={classes}>
                    
                      <div className="flex items-center gap-3">
                      
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="  object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="black"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                        <Typography
                          variant="small"
                          
                          className="font-bold text-[#808a9d]"
                        >
                          {logo}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="red"
                        className="font-semibold"
                      >
                        {hr}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                      <Typography
                        variant="small"
                        
                        className="font-semibold text-[#16c784]"
                      >
                        {thr}
                      </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                      <Typography
                        variant="small"
                        
                        className="font-semibold text-[#16c784]"
                      >
                        {days}
                      </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                      <Typography
                        variant="small"
                        color="black"
                        className="font-semibold "
                      >
                        {account}
                      </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal capitalize"
                          >
                             {accountNumber}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {expiry}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}