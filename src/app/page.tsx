import Topbar from "@/components/top-bar";
import SearchForm from "@/components/search-form";
import SideSortingControls from "@/components/side-sorting-controls";
import SortingControls from "@/components/sorting-controls";
import Sidebar from "@/components/sidebar";
import SidebarTop from "@/components/sidebar-top";
import ResultsCount from "@/components/results-count";
import JobList from "@/components/job-list";
import PaginationControls from "@/components/pagination-controls";
import JobItemContent from "@/components/jobItem-content";
import Container from "@/components/container";

export default function Home(searchParams: { [key: string]: string | string[] | undefined }) {

  const page = searchParams.page || 1;

  return (
    <main>
      <div className="flex flex-col w-full mt-16">
        <Topbar>
          <SearchForm />
          <SortingControls />
        </Topbar>

        <Container>
          <Sidebar>
            <SidebarTop>
              <ResultsCount />
              <SideSortingControls />
            </SidebarTop>

            <JobList page={+page}/>

            <PaginationControls />
          </Sidebar>

          <JobItemContent />
        </Container>
      </div>
    </main>
  );
}
