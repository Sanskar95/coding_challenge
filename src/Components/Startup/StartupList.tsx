import { Fragment, ReactElement, useState, useEffect } from "react";
import { Startup } from "../../Types/Startup";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import StartupCard from "../StartupCard";

export default function StartupList(): ReactElement {
  const [startups, setStartups] = useState<Startup[]>([]);

  useEffect(() => {
    StartupHttpService.getAllStartups().then((response) => {
      setStartups(response);
    });
  }, [startups]);

  return (
    <Fragment>
      {startups.map((startup) => {
        return (
          <StartupCard
            name={startup.name}
            dateFounded={startup.dateFounded.toString()}
            employees={startup.employees}
            totalFunding={startup.employees}
            currentInvestmentStage={startup.currentInvestmentStage}
            shortDescription={startup.shortDescription}
          />
        );
      })}
    </Fragment>
  );
}
