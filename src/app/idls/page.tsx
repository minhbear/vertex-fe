"use client";

import { Button } from "@/components/ui/button";
import { IdlDappResponse } from "@/models/app.model";
import {
  ComponentPropsWithoutRef,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import IdlView from "@/components/sn-idl/modal/IdlView";
import { UploadIdlModal } from "@/components/sn-idl/modal/UploadIdlModal";
import { CopyIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { CommonInput, CommonPagination } from "@/components/common";
import { SearchIcon } from "@/components/icons";
import { twJoin } from "tailwind-merge";
import { useAppContext } from "@/context";
import { isNil } from "lodash";
import { useAppHooks } from "@/hooks";

const IDL = () => {
  const { userInfo } = useAppContext();
  const { handleGetIdls } = useAppHooks();

  const idlsRef = useRef<IdlDappResponse[]>();
  const [idls, setIdls] = useState<IdlDappResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIdl, setSelectedIdl] = useState<IdlDappResponse | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const [pagingData, setPagingData] = useState({
    totalItem: 0,
    currentPage: 1,
  });

  const [pagingParams, setPagingParams] = useState({ pageNum: 1, pageSize: 5 });

  useEffect(() => {
    setIsLoading(true);

    const fetchIdls = async () => {
      try {
        const response = await handleGetIdls(pagingParams);
        if (response) {
          setIdls(response.pageData || []);
          idlsRef.current = response.pageData || [];
          setPagingData({
            currentPage: response.pageNum,
            totalItem: response.total,
          });
        }
      } catch (error) {
        console.error("Error fetching Idl:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isNil(userInfo)) {
      fetchIdls();
    } else {
      setIsLoading(false);
    }
  }, [isUploadModalOpen, pagingParams]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleCardClick = (idl: IdlDappResponse) => {
    setSelectedIdl(idl);
  };

  const handleCloseModal = () => {
    setSelectedIdl(null);
  };

  const handleSearch = (valueSearch: string) => {
    const filterIdl = idlsRef.current?.filter((item) =>
      item.name.toLocaleLowerCase().includes(valueSearch)
    );

    setIdls(filterIdl || []);
  };

  return (
    <div className="flex flex-col pt-10">
      <div className="flex flex-col gap-y-5 sm:gap-y-8 overflow-y-auto">
        <p className="text-2xl sm:text-[32px] font-bold">IDLs</p>

        <div className="flex items-center justify-between">
          <p className="text-sm text-white/50 max-w-[50%]">
            List of all Interface Definition Language (IDL) files uploaded.
            These represent different on-chain programs you can index and
            interact with.
          </p>

          <CommonInput
            startAdornment={<SearchIcon className="w-5 h-5" />}
            inputWrapperClassName={twJoin(
              "!bg-[#1e2024]",
              "overflow-hidden",
              "rounded-full border-none",
              "gap-x-2 h-[44px] !w-[320px]"
            )}
            onChange={(e) => handleSearch(e.target.value.toLowerCase())}
            className="text-sm"
            placeholder="Search by program name..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {idls.map((idl) => (
            <IDLCard
              key={idl.id}
              label={idl.name}
              version={idl.version}
              programId={idl.programId}
              onViewDetail={() => handleCardClick(idl)}
            />
          ))}
        </div>

        {idls?.length > 0 && (
          <CommonPagination
            className="mx-auto"
            currentPage={pagingData?.currentPage}
            totalItem={pagingData?.totalItem}
            onChangePagination={(data) => setPagingParams(data)}
          />
        )}
      </div>
      <Button
        className="w-[100px] fixed bottom-4 right-4 z-40"
        onClick={() => setIsUploadModalOpen(true)}
      >
        Upload IDL
      </Button>
      {selectedIdl && (
        <IdlView idl={selectedIdl.idlJson} onClose={handleCloseModal} />
      )}
      <UploadIdlModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
};

export default IDL;

const IDLCard: FC<IDLCardProps> = ({
  label,
  version,
  programId,
  onViewDetail,
  ...otherProps
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(programId);
    toast.success("Copy success!");
  };

  return (
    <div
      className="bg-gradient-to-br from-[#1e2a38] to-[#2a3140]  rounded-xl  text-white w-full max-w-sm border border-[#642bdf]/60 overflow-hidden"
      {...otherProps}
    >
      <div className="flex items-center justify-between mb-4 bg-white/5 p-4">
        <h2 className="text-lg font-bold">{label}</h2>
        <button className="bg-[#642bdf] text-xs px-2 py-0.5 rounded font-medium shadow">
          {version}
        </button>
      </div>
      <div className="px-4 pb-4 flex flex-col">
        <span className="flex items-center text-gray-400 gap-x-2">
          <p className="text-sm  mb-1">Program ID:</p>
          <button onClick={handleCopy}>
            <CopyIcon className="w-4 h-4 hover:text-white" />
          </button>
        </span>
        <p className="text-sm break-all leading-relaxed text-gray-100 font-semibold">
          {programId}
        </p>

        <button
          className="text-center w-full text-sm py-2 bg-[#642bdf] rounded-lg mt-4 hover:cursor-pointer"
          onClick={onViewDetail}
        >
          View
        </button>
      </div>
    </div>
  );
};

interface IDLCardProps extends ComponentPropsWithoutRef<"div"> {
  label: string;
  version: string;
  programId: string;
  onViewDetail: () => void;
}
