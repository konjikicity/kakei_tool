import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import Card from "../Components/Card.jsx";

export default function Dashboard({ auth }) {
  const { props } = usePage();
  const { yearMonths } = props;

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          家計一覧
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <h2 className="text-2xl ml-12 mt-10 font-bold">
              2024年度
            </h2>
            <div className="flex flex-wrap justify-center mt-10">
              {yearMonths &&
                yearMonths.map((yearMonth) => <Card month={yearMonth.month} />)}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
